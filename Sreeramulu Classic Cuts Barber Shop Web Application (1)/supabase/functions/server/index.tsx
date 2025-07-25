import { Hono } from 'npm:hono'
import { cors } from 'npm:hono/cors'
import { logger } from 'npm:hono/logger'
import { createClient } from 'npm:@supabase/supabase-js'
import * as kv from './kv_store.tsx'

const app = new Hono()

// Middleware
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))

app.use('*', logger(console.log))

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
)

// Get all bookings for a specific date
app.get('/make-server-43d63237/bookings/:date', async (c) => {
  try {
    const date = c.req.param('date')
    const bookings = await kv.getByPrefix(`booking_${date}_`)
    return c.json({ bookings: bookings || [] })
  } catch (error) {
    console.log('Error fetching bookings:', error)
    return c.json({ error: 'Failed to fetch bookings' }, 500)
  }
})

// Create a new booking
app.post('/make-server-43d63237/book', async (c) => {
  try {
    const { barber, services, date, time, phone } = await c.req.json()
    
    // Check if slot is already booked
    const slotKey = `booking_${date}_${time}_${barber}`
    const existingBooking = await kv.get(slotKey)
    
    if (existingBooking) {
      return c.json({ error: 'This slot is already booked by someone' }, 409)
    }
    
    // Create booking
    const bookingId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const booking = {
      id: bookingId,
      barber,
      services,
      date,
      time,
      phone,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    }
    
    // Store booking
    await kv.set(slotKey, booking)
    await kv.set(`booking_id_${bookingId}`, booking)
    
    // Send SMS notification to shop owner
    try {
      const message = `New booking at Sreeramulu Classic Cuts!\nBarber: ${barber}\nServices: ${services.join(', ')}\nDate: ${date}\nTime: ${time}\nCustomer: ${phone}`
      
      // For demo purposes, we'll just log the SMS
      // In production, you would integrate with an SMS API
      console.log('SMS to 9381625471:', message)
      
      // You could integrate with SMS services like:
      // - Twilio
      // - AWS SNS
      // - TextLocal
      // - MSG91
    } catch (smsError) {
      console.log('SMS notification failed:', smsError)
      // Don't fail the booking if SMS fails
    }
    
    return c.json({ 
      success: true, 
      bookingId,
      message: 'Booking confirmed! You will receive a confirmation shortly.' 
    })
  } catch (error) {
    console.log('Error creating booking:', error)
    return c.json({ error: 'Failed to create booking' }, 500)
  }
})

// Get booking by ID
app.get('/make-server-43d63237/booking/:id', async (c) => {
  try {
    const bookingId = c.req.param('id')
    const booking = await kv.get(`booking_id_${bookingId}`)
    
    if (!booking) {
      return c.json({ error: 'Booking not found' }, 404)
    }
    
    return c.json({ booking })
  } catch (error) {
    console.log('Error fetching booking:', error)
    return c.json({ error: 'Failed to fetch booking' }, 500)
  }
})

// Cancel booking
app.delete('/make-server-43d63237/booking/:id', async (c) => {
  try {
    const bookingId = c.req.param('id')
    const booking = await kv.get(`booking_id_${bookingId}`)
    
    if (!booking) {
      return c.json({ error: 'Booking not found' }, 404)
    }
    
    // Remove booking from both keys
    const slotKey = `booking_${booking.date}_${booking.time}_${booking.barber}`
    await kv.del(slotKey)
    await kv.del(`booking_id_${bookingId}`)
    
    return c.json({ success: true, message: 'Booking cancelled successfully' })
  } catch (error) {
    console.log('Error cancelling booking:', error)
    return c.json({ error: 'Failed to cancel booking' }, 500)
  }
})

// Get available time slots for a specific date and barber
app.get('/make-server-43d63237/availability/:date/:barber', async (c) => {
  try {
    const date = c.req.param('date')
    const barber = c.req.param('barber')
    
    // Define working hours (9 AM to 8 PM)
    const workingHours = [
      '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
      '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
    ]
    
    // Get all bookings for this date and barber
    const bookings = await kv.getByPrefix(`booking_${date}_`)
    const bookedSlots = bookings
      .filter(booking => booking.barber === barber)
      .map(booking => booking.time)
    
    // Filter available slots
    const availableSlots = workingHours.filter(slot => !bookedSlots.includes(slot))
    
    return c.json({ availableSlots, bookedSlots })
  } catch (error) {
    console.log('Error fetching availability:', error)
    return c.json({ error: 'Failed to fetch availability' }, 500)
  }
})

// Health check
app.get('/make-server-43d63237/health', (c) => {
  return c.json({ status: 'OK', timestamp: new Date().toISOString() })
})

Deno.serve(app.fetch)
// Key-Value store implementation for storing booking data
// This uses Deno KV for persistent data storage

const kv = await Deno.openKv();

export async function get(key: string): Promise<any> {
  try {
    const result = await kv.get([key]);
    return result.value;
  } catch (error) {
    console.error('Error getting key:', key, error);
    return null;
  }
}

export async function set(key: string, value: any): Promise<void> {
  try {
    await kv.set([key], value);
  } catch (error) {
    console.error('Error setting key:', key, error);
    throw error;
  }
}

export async function del(key: string): Promise<void> {
  try {
    await kv.delete([key]);
  } catch (error) {
    console.error('Error deleting key:', key, error);
    throw error;
  }
}

export async function getByPrefix(prefix: string): Promise<any[]> {
  try {
    const results: any[] = [];
    const iter = kv.list({ prefix: [prefix] });
    
    for await (const entry of iter) {
      if (entry.value) {
        results.push(entry.value);
      }
    }
    
    return results;
  } catch (error) {
    console.error('Error getting by prefix:', prefix, error);
    return [];
  }
}
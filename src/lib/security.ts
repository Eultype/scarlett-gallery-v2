export const rateLimitStore = new Map<string, { count: number; lastReset: number }>();

export function checkRateLimit(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const windowData = rateLimitStore.get(ip);

  if (!windowData) {
    rateLimitStore.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (now - windowData.lastReset > windowMs) {
    rateLimitStore.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (windowData.count >= limit) {
    return false;
  }

  windowData.count += 1;
  return true;
}

export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function ensureProtocol(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function pushDataLayerEvent(event: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event });
}

export async function submitAnalysisForm(
  email: string,
  websiteUrl: string
): Promise<boolean> {
  try {
    const res = await fetch("/api/analysis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, website_url: ensureProtocol(websiteUrl) }),
    });
    const data = await res.json();
    if (data.ok) pushDataLayerEvent("free_analysis_request");
    return data.ok;
  } catch {
    return false;
  }
}

export async function sendDemoNotification(formData: {
  name: string;
  email: string;
  websiteUrl: string;
  category: string;
}): Promise<boolean> {
  try {
    const res = await fetch("/api/demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, websiteUrl: ensureProtocol(formData.websiteUrl) }),
    });
    const data = await res.json();
    if (data.ok) pushDataLayerEvent("demo_request");
    return data.ok;
  } catch {
    return false;
  }
}

export const server = "http://127.0.0.1:8000/";

export let sessionId = "";
export function setSessionId(newSessionId: string) {
  sessionId = newSessionId;
}

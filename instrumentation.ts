import { OpenTelemetry } from "@ai-sdk/otel";
import { registerOTel } from "@vercel/otel";
import { registerTelemetry } from "ai";

export function register() {
  registerOTel({ serviceName: "my-chatbot-app" });
  registerTelemetry(new OpenTelemetry());
}

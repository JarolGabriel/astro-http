// ./src/index.js

export interface Env {
  // Define las variables de entorno, si es necesario (ejemplo: KV, variables de entorno)
  SESSION: string;
}

export default {
  async fetch(req: Request, env: Env, ctx: any): Promise<Response> {
    // Aquí va la lógica de tu Worker
    return new Response("¡Hola desde mi Worker en TypeScript!", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};

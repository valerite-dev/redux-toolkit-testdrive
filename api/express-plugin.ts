export default function express({ entry }: { entry: string}) {
  return {
    name: 'plugin-express',
    configureServer: async (server: any) => {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        process.env.VITE = 'true';
        try {
          const { app } = await server.ssrLoadModule(entry);
          app(req, res, next);
        } catch (err) {
          console.error(err);
        }
      });
    },
  };
}

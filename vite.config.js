export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // accessible on LAN
    port: 5173       // choose your port
  }
});

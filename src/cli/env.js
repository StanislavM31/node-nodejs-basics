const parseEnv = () => {
    process.env.RSS_version = '1.0.0';
    process.env.RSS_host = 'localhost';
    process.env.RSS_port = '8080';
};

parseEnv();
    const envVars = process.env;
    const rssVars = Object.entries(envVars)
      .filter(([key]) => key.startsWith('RSS_'))
      .map(([key, value]) => `${key}=${value}`)
      .join('; ');
    console.log(rssVars);
    delete process.env.RSS_host;
    delete process.env.RSS_port;
    delete process.env.RSS_version;

  parseEnv();
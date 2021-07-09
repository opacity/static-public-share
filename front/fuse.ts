import { fusebox, sparky, pluginReplace } from "fuse-box";
import * as path from "path"

class Context {
  runServer: boolean;
  env: {
    NODE_ENV: "development" | "production"
    STORAGE_NODE_VERSION: "beta" | "production"
  }

  getConfig = () =>
    fusebox({
      target: "browser",
      entry: "src/index.tsx",
      webIndex: {
        distFileName: this.env.NODE_ENV == "production" ? "../templates/shortlink.html" : undefined,
        template: this.env.NODE_ENV == "production" ? "src/shortlink.html" : "src/shortlink_dev.html",
      },
      cache: true,
      devServer: {
        enabled: this.runServer,
        httpServer: {
          enabled: this.runServer,
          port: 4445,
        },
      },
      plugins: [
        pluginReplace(/node_modules\/bn\.js\/.*/, {
          "require('buffer')": "require('" + require.resolve("./node_modules/buffer") + "')",
        }),
        pluginReplace(/node_modules\/readable-stream\/.*/, {
          "require('util')": "require('" + require.resolve("./node_modules/util") + "')",
        }),
        pluginReplace(/node_modules\/readable-stream\/.*/, {
          "require('stream')": "require('" + require.resolve("./node_modules/stream-browserify") + "')",
        }),
      ],
      resources: {
        resourceFolder: this.env.NODE_ENV == "production" ? "./shortlink/resources" : undefined,
      },
      env: this.env,
    });
}

const { task, src, exec, rm } = sparky<Context>(Context);

task("remove-artifacts", async (ctx) => {
  rm(".cache")

  if (ctx.env.NODE_ENV == "production") {
    rm("../public/shortlink")
    rm("../templates/shortlink.html")
  } else {
    rm("dist")
  }
})

task("copy-streamsaver", async () => {
  await src("node_modules/streamsaver/{mitm.html,sw.js}")
    .dest("dist/resources/streamsaver", path.join(__dirname, "node_modules/streamsaver"))
    .write()
    .exec()

  await src("src/favicon.ico")
    .dest("dist", path.join(__dirname, "src"))
    .write()
    .exec();
})

task("default", async ctx => {
  await exec("run-dev-beta")
})

task("run-dev-prod", async ctx => {
  await exec("remove-artifacts")

  ctx.runServer = true;
  ctx.env = {
    NODE_ENV: "development",
    STORAGE_NODE_VERSION: "production",
  }
  const fuse = ctx.getConfig();

  await exec("copy-streamsaver")
  await fuse.runDev();
});

task("run-dev-beta", async ctx => {
  ctx.runServer = true;
  ctx.env = {
    NODE_ENV: "development",
    STORAGE_NODE_VERSION: "beta",
  }

  await exec("remove-artifacts")

  const fuse = ctx.getConfig();

  await exec("copy-streamsaver")
  await fuse.runDev();
});

task("run-prod-beta", async ctx => {
  ctx.runServer = true;
  ctx.env = {
    NODE_ENV: "production",
    STORAGE_NODE_VERSION: "beta",
  }

  await exec("remove-artifacts")

  const fuse = ctx.getConfig();

  await exec("copy-streamsaver")
  await fuse.runProd({
    uglify: false,
  });
});

task("run-prod-prod", async ctx => {
  ctx.runServer = true;
  ctx.env = {
    NODE_ENV: "production",
    STORAGE_NODE_VERSION: "production",
  }

  await exec("remove-artifacts")

  const fuse = ctx.getConfig();

  await exec("copy-streamsaver")
  await fuse.runProd({
    uglify: false,
  });
});

task("dist-prod-beta", async ctx => {
  ctx.runServer = false;
  ctx.env = {
    NODE_ENV: "production",
    STORAGE_NODE_VERSION: "beta",
  }

  await exec("remove-artifacts")

  const fuse = ctx.getConfig();

  await exec("copy-streamsaver")
  await fuse.runProd({
    uglify: false,
    bundles: {
      distRoot: "../public",
      app: "./shortlink/app.$hash.js",
      styles: "./shortlink/style.$hash.css",
      vendor: "./shortlink/vendor.$hash.js",
    },
  });
});

task("dist-prod-prod", async ctx => {
  ctx.runServer = false;
  ctx.env = {
    NODE_ENV: "production",
    STORAGE_NODE_VERSION: "production",
  }

  await exec("remove-artifacts")

  const fuse = ctx.getConfig();

  await exec("copy-streamsaver")
  await src("src/favicon.ico")
    .dest("../public/shortlink/resources", path.join(__dirname, "src"))
    .write()
    .exec();
  await fuse.runProd({
    uglify: false,
    bundles: {
      distRoot: "../public",
      app: "./shortlink/app.$hash.js",
      styles: "./shortlink/style.$hash.css",
      vendor: "./shortlink/vendor.$hash.js",
    },
  });
});

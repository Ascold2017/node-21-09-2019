const fs = require("fs");

function copyFile(source, target, cb) {
  let cbCalled = false;

  const rd = fs.createReadStream(source);
  rd.on("error", err => done (err))

  const wr = fs.createWriteStream(target);
  wr.on("error", err => done (err))
    .on("close", () => done (null));

  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}

copyFile('./text.html', './new.html', err => {
    console.log('done', err)
})

const fs = require("fs");

const countWords = async () => {
  const data = await fs.readFile("./data.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
    }
    const totalWords = result.split(" ").length;
    console.log(`Total number of words is: ${totalWords}`);
  });
};

countWords();

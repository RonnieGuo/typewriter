const sentence = "hello there from lighthouse labs \n";
for (const char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);
  }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.

}

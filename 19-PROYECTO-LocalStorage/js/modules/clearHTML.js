function clearHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
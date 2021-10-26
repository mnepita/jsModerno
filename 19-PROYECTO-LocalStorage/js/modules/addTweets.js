function addTweet(e) {
  e.preventDefault();
  const tweet = document.getElementById('tweet').value;
  if (tweet === '') {
    showError(`no puede ir vacio`);
    return
  }

  const tweetObj = {
    id: Date.now(),
    tweet
  }

  //add to the tweet list
  tweets = [...tweets, tweetObj];

  renderHTML();
  formulario.reset();
}
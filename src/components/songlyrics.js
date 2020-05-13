import React from "react"
export default () => {

  function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  // Probably should be made into a GRaphql query or Json or something, but this is simple and works
  const lyrics = [
    {
      lyrics: "Live how you wanna live, your whole life in front of you. \nBe who you wanna be, do what you wanna do.",
      songMeta: "Bounce - DJ Okawari feat. Talib Kweli"
    },
    {
      lyrics: "I'm not a businessman; I'm a business, man!",
      songMeta: "Diamonds From Sierra Leone (Remix) - Kanye West feat. Jay-Z"
    },
    {
      lyrics: "When I say I'ma do somethin', I do it. I don't give a damn what you think, I'm doin' this for me",
      songMeta: "Not Afraid - Eminem"
    },
    {
      lyrics: "Always gon' be a whip that's better than the one you got, \nAlways gon' be some clothes that's fresher than the ones you rock, \nAlways gon' be a bitch that's badder out there on the tours, \nBut you ain't never gon' be happy 'til you love yours",
      songMeta: "Love yours - J.Cole"

    },
    {
      lyrics: "All I do is make the stuff I would've liked,\nreference things I wanna watch,\nreference girls I wanna bite",
      songMeta: "Firefly - Childish Gambino"

    }
  ]

  const songLyrics = random(lyrics);

  return (
    <div style={{
      fontFamily: `"Inter", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif`,
      fontSize: `0.75rem`,
      margin: `2rem 0 0 0`,
      lineHeight: `1.2`,
      maxWidth: `75%`,
    }}>
      <div style={{
        color: `#575757`,
        margin: `0 0 0.5rem 0`,
        whiteSpace: `pre-line`
      }}>
        {songLyrics.lyrics}
      </div>
      <div>
        {songLyrics.songMeta}
      </div>
    </div>
  )
}

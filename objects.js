var playlist = { 'Slowdive' : "Alison", 'My Bloody Valentine' : "Sometimes"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}
  before(() => {
    playlist['Slowdive'] = 'Alison'
    playlist['My Bloody Valentine'] = 'Sometimes'
  })

  it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
    updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

    expect(playlist).
      to.contain.all.keys({'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})
  })
})
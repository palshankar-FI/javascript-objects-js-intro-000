var playlist = { 'Slowdive' : "Alison", 'My Bloody Valentine' : "Sometimes"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete(playlist.artistName);
}
  it('removes `artistName` from `playlist`', () => {
    removeFromPlaylist(playlist, 'Slowdive')

    expect(playlist).
      to.contain.all.keys({'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})

    expect(playlist).
      not.to.have.all.keys({'Slowdive': 'Alison'})
  })
})
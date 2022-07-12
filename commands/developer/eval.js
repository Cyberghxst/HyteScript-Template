module.exports = {
  name: "eval",
  aliases: ['ev', 'e'],
  code: `
#(set => devs | #(readFile => ./assets/developer.json))
#(if => #(includes => #(get => devs) | #(author => id)) == true |
  #(try => #(eval => #(args)) |
    #(getError => type) : #(getError => message)
  )
)
`
};
// Title	 Author	 ISBN	 My Rating	 Average Rating	 Publisher	 Binding	 Year Published	 Original Publication Year	 Date Read	 Date Added	 Bookshelves	 My Review
url = "https://api.douban.com/v2/book/user/jinntrance/collections?status=read&from=2016-01-01T00:14:11&count=1000"

$.getJSON(url, function(bks) {
comments = ["Title, Author, ISBN, My Rating, Average Rating, Publisher, Binding, Year Published, Original Publication Year, Date Read, Date Added, Bookshelves, My Review"]
for(var i in bks.collections) {
	b = bks.collections[i]
	bk = b.book
	var line = [bk.title,bk.author[0],bk.isbn13,b.rating.value,bk.rating.average,bk.publisher,bk.binding,bk.pubdate.split('-')[0],'',b.updated,b.updated,b.tags.join[","],'"' + b.comment.replace(/[\r\n]/g, "<br />")+'"'].join(',')
	comments.push(line)
}
copy(comments.join("\n"))
});

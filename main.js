function AppViewModel(){
    var self = this,
        newsHeadersArray = ["Срочная новость!", "Обычная новость", "Никому не интересная новость" ],
        newsArray = [
            {
                title: "Срочная новость!",
                text: "Внимание! Внимание! Срочно используйте binding template",
                isNew: true
            },
            {
                title: "Обычная новость",
                text: "Теперь они наблюдают за нашими массивами. Что же будет дальше?",
                isNew: false
            },
            {
                title: "Никому не интересная новость",
                text: "На сайте Knockout.js обновилась документация",
                isNew: false
            }
        ];

    this.newsHeaders = ko.observableArray(newsHeadersArray);
    this.news = ko.observableArray(newsArray);

    this.addNewsControl = {
        newTitle: ko.observable(),
        newText: ko.observable(),
        newIsNew: ko.observable(),
        addItem: function(context) {
            var value = {
                    title: context.newTitle(),
                    text: context.newText(),
                    isNew: context.newIsNew()
                };

            self.news.push(value);
        },
        removeAll: function() {
            self.news.removeAll();
        }
    };

    this.removeItem = function(context, event) {
        self.news.remove(context);
    }
}

ko.applyBindings(new AppViewModel());
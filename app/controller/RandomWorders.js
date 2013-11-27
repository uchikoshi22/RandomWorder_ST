Ext.define('RandomWorder.controller.RandomWorders', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            'form': 'wordform',
            'list': 'wordlist'
        },
        control: {
            'form': {
                'showword': 'showWord',
            },
            'list': {
                'clearlist': 'clearList',
            }
        }
    },

    clearList: function() {
        //<debug>
        console.log("Delete All List");
        //</debug>
        var store = Ext.getStore('RandomWords');
        var records = store.getRange();
        store.remove(records);
        //<debug>
        console.log("Delete Finished!");
        //</debug>
    },


    showWord: function(record, values) {
        //<debug>
        console.log('Start generating a random word');
        //</debug>

        //var hoge = Ext.Object.getValues(values);
        //console.log(hoge[0]);

        var length = values.length;
        var lowercase = values.lowercase;
        var uppercase = values.uppercase;
        var digit = values.digit;
        var symbol = values.symbol;

        //<debug>
        //console.log(record.data.recorded);
        console.log(length, lowercase);
        //</debug>

        var randomword = this.getRandomWord(length, lowercase, uppercase, digit, symbol);

        //<debug>
        console.log(randomword);
        //</debug>

        Ext.Msg.alert('Password For You', randomword);

        this.saveWord(record, randomword);

        //<debug>
        console.log("Saved!");
        //</debug>

        return null;
    },

    saveWord: function(record, randomword) {
        //<debug>
        console.log('save record in controller', randomword);
        //</debug>
        record.data.word = randomword;
        var store = Ext.getStore('RandomWords');
        store.add(record);
        store.sync();
        //this.showList();
    },

    getRandomWord: function(len, lowercase, uppercase, digit, symbol) {
        var random_word = '';

        // If all of checkboxes are not checked, only lowercase is true
        if (lowercase != true && uppercase != true && digit != true && symbol != true) {
            lowercase = true;
        }

        var number_letters = new Array();
        if (digit == true) {
            for (var i=0; i<10; i++) {
                number_letters.push(String.fromCharCode('0'.charCodeAt() + i));
            };
        };

        var small_letters = new Array();
        if (lowercase == true) { 
            for (var i=0; i<26; i++) {
                small_letters.push(String.fromCharCode('a'.charCodeAt() + i));
            };
        };

        var capital_letters = new Array();
        if(uppercase == true) {
            for (var i=0; i<26; i++) {
                capital_letters.push(String.fromCharCode('A'.charCodeAt() + i));
            };
        };

        var symbols = ''
        if (symbol == true) {
            var symbols = '!@#$%&*?+-'.split('');
        };

        // Join number_letters, small_letters, capital_letters and symbols array
        var source_characters = new Array();
        source_characters = number_letters.concat(small_letters, capital_letters, symbols);

        //<debug>
        console.log(source_characters);
        //</debug>

        // Generate a random word

        for(var i=0; i<len; i++) {
            random_word += source_characters[Math.floor(Math.random() * source_characters.length)]; 
        };        

        return random_word;
    },

    
});

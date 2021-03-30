var app = new Vue({
  el: '#app',
  data: {
    input: {
      index: 0,
      day: 0,
      lecturer: null,
      subject: null,
    },
    table: [{
        index: 0,
        lecturer: null,
        subject: null
      }],
    table1: [{
        index: 0,
        lecturer: null,
        subject: null
      }],
    table2: [{
        index: 0,
        lecturer: null,
        subject: null
      }],
    table3: [{
        index: 0,
        lecturer: null,
        subject: null
      }],
    table4: [{
        index: 0,
        lecturer: null,
        subject: null
      }],
    },
  created: function() {
      for(var i = 0; i < 4; i++) {
        this.table.push({index: i, lecturer: null, subject: null});
        this.table1.push({index: i, lecturer: null, subject: null});
        this.table2.push({index: i, lecturer: null, subject: null});
        this.table3.push({index: i, lecturer: null, subject: null});
        this.table4.push({index: i, lecturer: null, subject: null});
      }
    },
  methods: {
      add: function(index, day) {
        index = Number(index);
        day = Number(day);
        switch(index) {
          case 0:
            this.table[day].lecturer = this.input.lecturer;
            this.table[day].subject = this.input.subject;
            break;
          case 1:
            this.table1[day].lecturer = this.input.lecturer;
            this.table1[day].subject = this.input.subject;
            break;
          case 2:
            this.table2[day].lecturer = this.input.lecturer;
            this.table2[day].subject = this.input.subject;
            break;
          case 3:
            this.table3[day].lecturer = this.input.lecturer;
            this.table3[day].subject = this.input.subject;
            break;
          case 4:
            this.table4[day].lecturer = this.input.lecturer;
            this.table4[day].subject = this.input.subject;
            break;
        }
      }
    }
  });
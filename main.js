var app = new Vue({
  el: '#app',
  data: {
    input: {
      index: 1,
      lecturer: '김교수',
      subject: 'Math',
    },
    table: [{
        index: 0,
        lecturer: 'kim',
        subject: 'math'
      }],
    table1: [{
        index: 1,
        lecturer: 'kim',
        subject: 'math'
      }],
    },
  created: function() {
      for(var i = 0; i < 4; i++) {
        this.table.push({index: i, lecturer: null, subject: null});
        this.table1.push({index: i, lecturer: null, subject: null});
      }
    },
  methods: {
      add: function(index) {
        if(confirm("8:00-10:00 or 10:00-12:00?")) {
          this.table[index].lecturer = this.input.lecturer;
          this.table[index].subject = this.input.subject;
        } else {
          this.table1[index].lecturer = this.input.lecturer;
          this.table1[index].subject = this.input.subject;
          
        }
      }
    }
  });
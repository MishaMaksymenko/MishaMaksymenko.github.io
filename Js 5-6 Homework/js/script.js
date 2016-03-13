var timer = {
    timeData: document.getElementById("timer"),
    timeZero: "00:00:00:000",
    timerId: 0,
    startButton: document.getElementById("startButton"),
    stopButton: document.getElementById("stopButton"),
    contButton:document.getElementById("contButton"),
    clearButton: document.getElementById("clearButton"),

    handler: function(event) {  //  takes targeted object into timer without window context
        timer.guard(event.target);
        // console.log(this);
        // console.log(event.target);
    },

    guard: function(el) {   // cheks if targeted object relays to one of 4 buttons
        // var self = this;
        // console.log(this);

        if (el === this.startButton || el === this.contButton ) {
           this.runTimer(); 
           el.style.display = "none";
           this.stopButton.style.display = "inline-block"; 
        }

        if (el === this.stopButton) {
            clearInterval(this.timerId);
            el.style.display = "";
            this.contButton.style.display = "inline-block";
        }

        if (el === this.clearButton) {
            timer.timeData.innerHTML = timer.timeZero;
            clearInterval(this.timerId);
            this.startButton.style.display = "";
            this.stopButton.style.display = "";
            this.contButton.style.display = "";
        }
    },

    runTimer: function() {  //  calculetes time
        // console.log(this.timeData);
        var arr = this.timeData.innerHTML.split(":");
        var h = arr[0];
        var m = arr[1];
        var s = arr[2];
        var ms = arr[3];
        // console.log(arr);
        var self = this;

        this.timerId = setInterval(function() {
            ms = +ms + 4;

            if (ms === 1000) {
                s++;
                ms = 0;

                if (s < 10) {
                s = "0" + s;
                }
            }

            if (ms < 10) {
                ms = "00" + ms;
            }

            if (ms >=10 && ms < 100) {
                ms = "0" + ms;
            }


            if (s === 60) {
                m++;
                s = "00";

                if (m < 10) {
                m = "0" + m;
                }
            }

            if (m === 60) {
                h++;
                m = "00";

                if (h < 10) {
                h = "0" + h;
                }
            }
     
            self.timeData.innerHTML = h+":"+m+":"+s+":"+ms;
        
        }, 1);
    },
};


window.addEventListener('click', timer.handler);
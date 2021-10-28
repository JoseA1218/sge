
        let b = document.getElementById("su");
        let us = document.getElementById("un");
        let em = document.getElementById("em");

        b.addEventListener("click", f, false);
        us.addEventListener("blur",f2,true);
        em.addEventListener("dblclick",f3,true);

        function f() {
           
            
            let ps = document.getElementById("pass").value;
            let cps = document.getElementById("cpass").value;

            // window.alert(us.length);
            
           
            let regepass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!%_*?&]{8,}$/;


            if (regepass.test(ps)) {
                window.alert("Pass bien");
            } else {
                window.alert("pass no bien");
            }
            
            if (ps == cps) {
                window.alert("coinciden");
            } else {
                window.alert("no coinciden");
            }

        }

        function f2() {
            if (us.value.length < 3 || us.value.length > 25) {
                window.alert("no");
            } 
            us.removeEventListener("blur",f2,true);
        }
        function f3() {
            let regemail = /[a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]+/;

            if (regemail.test(em.value)) {
                window.alert("si");
            } 
        }


    // Load and draw the shot map image when the html-page is loaded
    window.onload = function() {
    var ctx = cnvs.getContext("2d");
    ctx.drawImage(myImg,0,0,fWidth,fLength);
    }

    // When the change team order button is changed, the teams switch sides
    function ChangeOrder() {
        if (Order == 1) { // Team 1 is moved as the upper one, defence zone is up
            document.getElementById("TeamL").innerHTML = "Team 2";
            document.getElementById("TeamR").innerHTML = "Team 1";
            Order = 2;
        }
        else { // Team 1 is moved as the bottom one, defence zone is down
            document.getElementById("TeamL").innerHTML = "Team 1";
            document.getElementById("TeamR").innerHTML = "Team 2";
            Order = 1;
        }
    }

    // When the ball team left button is pressed the button colors and the variable are changed
    // If game is on, them one number is added to number of times with ball
    function BallTeamL() {
        document.getElementById("TeamR").style.background='#4CAF50';
        document.getElementById("TeamL").style.background='#555555';
        if (Order == 1) {
            Ball_pos = 1;
            if (started == 1 && PosTime > 0) {
                Not_p[line_on - 1]++;
                Not_g[line_on - 1]++;
                if (line_on < 4) {
                    Not_p[7]++;
                    Not_g[7]++;
                }
            }
            PosTime = 0;

        } else {
            Ball_pos = 2;
            if (started == 1 && PosTime > 0) {
                Notno_p[line_on - 1]++;
                Notno_g[line_on - 1]++;
                if (line_on < 4) {
                    Notno_p[7]++;
                    Notno_g[7]++;
                }
            }
            PosTime = 0;
        }
    }

    // When the ball team right button is pressed
    function BallTeamR() {
        document.getElementById("TeamR").style.background='#555555';
        document.getElementById("TeamL").style.background='#4CAF50';
        if (Order == 1) {
            Ball_pos = 2;
            if (started == 1 && PosTime > 0) {
                Notno_p[line_on - 1]++;
                Notno_g[line_on - 1]++;
                if (line_on < 4) {
                    Notno_p[7]++;
                    Notno_g[7]++;
                }
            }
            PosTime = 0;
        }

        else {
            Ball_pos = 1;
            if (started == 1 && PosTime > 0) {
                Not_p[line_on - 1]++;
                Not_g[line_on - 1]++;
                if (line_on < 4) {
                    Not_p[7]++;
                    Not_g[7]++;
                }
            }
            PosTime = 0;
        }
    }

    // When the line is changed by pressing any of the line on court buttons except the one that is on
    // Team 1 line change functionality
    function Line_change(line) {
        console.log(lines); // debugging
        document.getElementById(lines[line_on-1]).style.background='#4CAF50';
        document.getElementById(lines[line-1]).style.background='#555555';
        old_line = line_on;
        line_on = line;
        if (LineTime > 0) {
            if (Ball_pos == 1) {
                Not_p[line_on - 1]++;
                Not_g[line_on - 1]++;
                if (line_on < 4) {
                    Not_p[7]++;
                    Not_g[7]++;
                }
            }
            if (Ball_pos == 2) {
                Notno_p[line_on - 1]++;
                Notno_g[line_on - 1]++;
                if (line_on < 4) {
                    Notno_p[7]++;
                    Notno_g[7]++;
                }
            }
            Nos_p[line_on - 1]++;
            Nos_g[line_on - 1]++;
            if (line_on < 4) {
                Nos_p[7]++;
                Nos_g[7]++;
            }

            if (old_line == 1) {
                shiftP = Math.round(100 * shiftPos / LineTime);
                posT = Pos_g[0] + Pos_g[1] + Pos_g[2] + Pos_g[3] + Pos_g[4] + Pos_g[5] + Pos_g[6];
                teamPos = Math.round(100 * posT / gameCounter);
                Math.round(100 * Pos_p[line_on - 1] / Toc_p[line_on - 1]);

                posTeam_array.push([shiftNo, shiftP, 0, 0, 0, 0, teamPos]);
            }
            if (old_line == 2) {
                shiftP = Math.round(100 * shiftPos / LineTime);
                posT = Pos_g[0] + Pos_g[1] + Pos_g[2] + Pos_g[3] + Pos_g[4] + Pos_g[5] + Pos_g[6];
                teamPos = Math.round(100 * posT / gameCounter);
                Math.round(100 * Pos_p[line_on - 1] / Toc_p[line_on - 1]);

                posTeam_array.push([shiftNo, 0, shiftP, 0, 0, 0, teamPos]);
            }
            if (old_line == 3) {
                shiftP = Math.round(100 * shiftPos / LineTime);
                posT = Pos_g[0] + Pos_g[1] + Pos_g[2] + Pos_g[3] + Pos_g[4] + Pos_g[5] + Pos_g[6];
                teamPos = Math.round(100 * posT / gameCounter);
                Math.round(100 * Pos_p[line_on - 1] / Toc_p[line_on - 1]);

                posTeam_array.push([shiftNo, 0, 0, shiftP, 0, 0, teamPos]);
            }
            if (old_line == 4 || old_line == 5) {
                shiftP = Math.round(100 * shiftPos / LineTime);
                posT = Pos_g[0] + Pos_g[1] + Pos_g[2] + Pos_g[3] + Pos_g[4] + Pos_g[5] + Pos_g[6];
                teamPos = Math.round(100 * posT / gameCounter);
                Math.round(100 * Pos_p[line_on - 1] / Toc_p[line_on - 1]);

                posTeam_array.push([shiftNo, 0, 0, 0, shiftP, 0, teamPos]);
            }
            if (old_line == 6 || old_line == 7) {
                shiftP = Math.round(100 * shiftPos / LineTime);
                posT = Pos_g[0] + Pos_g[1] + Pos_g[2] + Pos_g[3] + Pos_g[4] + Pos_g[5] + Pos_g[6];
                teamPos = Math.round(100 * posT / gameCounter);
                Math.round(100 * Pos_p[line_on - 1] / Toc_p[line_on - 1]);

                posTeam_array.push([shiftNo, 0, 0, 0, 0, shiftP, teamPos]);
            }
        }
        console.log("Shift Possession: " + shiftP);
        console.log("Team Possession: " + teamPos);
        PosTime = 0;
        LineTime = 0;
        shiftNo++;
        shiftPos = 0;
        console.log(line_on); // debugging
        // Automatic line change for Team 2
        if (line < 4) {
            Line_change_2(line);
        }
        if (line == 4) {
            Line_change_2(6);
        }
        if (line == 5) {
            Line_change_2(7);
        }
        if (line == 6) {
            Line_change_2(4);
        }
        if (line == 7) {
            Line_change_2(5);
        }
    }

    // Team 2 line change functionality
    function Line_change_2(line) {
        console.log(lines_2); // debugging
        document.getElementById(lines_2[line_on_2-1]).style.background='#4CAF50';
        document.getElementById(lines_2[line-1]).style.background='#555555';
        old_line = line_on_2;
        line_on_2 = line;
        if (LineTime_2 > 0) {
            if (Ball_pos == 2) {
                NotT2_p[line_on_2 - 1]++;
                NotT2_g[line_on_2 - 1]++;
                if (line_on_2 < 4) {
                    NotT2_p[7]++;
                    NotT2_g[7]++;
                }
            }
            if (Ball_pos == 1) {
                NotnoT2_p[line_on_2 - 1]++;
                NotnoT2_g[line_on_2 - 1]++;
                if (line_on_2 < 4) {
                    NotnoT2_p[7]++;
                    NotnoT2_g[7]++;
                }
            }
            NosT2_p[line_on_2 - 1]++;
            NosT2_g[line_on_2 - 1]++;
            if (line_on_2 < 4) {
                NosT2_p[7]++;
                NosT2_g[7]++;
            }

            if (old_line == 1) {
                shiftP = Math.round(100 * shiftPos_2 / LineTime_2);
                posT = PosT2_g[0] + PosT2_g[1] + PosT2_g[2] + PosT2_g[3] + PosT2_g[4] + PosT2_g[5] + PosT2_g[6];
                teamPos = Math.round(100 * posT / gameCounter);
                Math.round(100 * PosT2_p[line_on_2 - 1] / TocT2_p[line_on_2 - 1]);

                posTeamT2_array.push([shiftNo_2, shiftP, 0, 0, 0, 0, teamPos]);
            }
            if (old_line == 2) {
                shiftP = Math.round(100 * shiftPos_2 / LineTime_2);
                posT = PosT2_g[0] + PosT2_g[1] + PosT2_g[2] + PosT2_g[3] + PosT2_g[4] + PosT2_g[5] + PosT2_g[6];
                teamPos = Math.round(100 * posT / gameCounter);
                Math.round(100 * PosT2_p[line_on_2 - 1] / TocT2_p[line_on_2 - 1]);

                posTeam_array.push([shiftNo_2, 0, shiftP, 0, 0, 0, teamPos]);
            }
            if (old_line == 3) {
                shiftP = Math.round(100 * shiftPos_2 / LineTime_2);
                posT = PosT2_g[0] + PosT2_g[1] + PosT2_g[2] + PosT2_g[3] + PosT2_g[4] + PosT2_g[5] + PosT2_g[6];
                teamPos = Math.round(100 * posT / gameCounter);
                Math.round(100 * PosT2_p[line_on_2 - 1] / TocT2_p[line_on_2 - 1]);

                posTeam_array.push([shiftNo_2, 0, 0, shiftP, 0, 0, teamPos]);
            }
            if (old_line == 4 || old_line == 5) {
                shiftP = Math.round(100 * shiftPos_2 / LineTime_2);
                posT = PosT2_g[0] + PosT2_g[1] + PosT2_g[2] + PosT2_g[3] + PosT2_g[4] + PosT2_g[5] + PosT2_g[6];
                teamPos = Math.round(100 * posT / gameCounter);
                Math.round(100 * PosT2_p[line_on_2 - 1] / TocT2_p[line_on_2 - 1]);

                posTeam_array.push([shiftNo_2, 0, 0, 0, shiftP, 0, teamPos]);
            }
            if (old_line == 6 || old_line == 7) {
                shiftP = Math.round(100 * shiftPos_2 / LineTime_2);
                posT = PosT2_g[0] + PosT2_g[1] + PosT2_g[2] + PosT2_g[3] + PosT2_g[4] + PosT2_g[5] + PosT2_g[6];
                teamPos = Math.round(100 * posT / gameCounter);
                Math.round(100 * PosT2_p[line_on_2 - 1] / TocT2_p[line_on_2 - 1]);

                posTeam_array.push([shiftNo_2, 0, 0, 0, 0, shiftP, teamPos]);
            }
        }
        console.log("Shift Possession: " + shiftP);
        console.log("Team Possession: " + teamPos);
        PosTime_2 = 0;
        LineTime_2 = 0;
        shiftNo_2++;
        shiftPos_2 = 0;
        console.log(line_on); // debugging
    }

    // Start game or start/stop game clock
    function Start() {
        // If the game has not started
        if (started == 0) {   // Start game and disable teams etc.
            var r = confirm("Do you want to start the game,\n changing teams will be disabled?");
            if (r == true) {
                document.getElementById("home_team").disabled = true;
                document.getElementById("away_team").disabled = true;
                document.getElementById("period").disabled = false;
                document.getElementById("reset").disabled = false;
                started = 1;
                sData.style.display = "block";

                if (document.getElementById("home_team").value !== "") {
                    name_t1 = document.getElementById("home_team").value;
                    set_t1_names();
                }

                if (document.getElementById("away_team").value !== "") {
                    name_t2 = document.getElementById("away_team").value;
                    set_t2_names();
                }

            } else {
            }
        }
        // Game has already started, then start/stop the game clock
        else {
            if (is_on == 0) {    // Start game clock
                if (counter == 0 && Ball_pos == 1) {
                    Not_p[line_on - 1]++;
                    Not_g[line_on - 1]++;
                    if (line_on < 4) {
                        Not_p[7]++;
                        Not_g[7]++;
                    }
                    NotnoT2_p[line_on_2 - 1]++;
                    NotnoT2_g[line_on_2 - 1]++;
                    if (line_on_2 < 4) {
                        NotnoT2_p[7]++;
                        NotnoT2_g[7]++;
                    }
                }
                if (counter == 0 && Ball_pos == 2) {
                    Notno_p[line_on - 1]++;
                    Notno_g[line_on - 1]++;
                    if (line_on < 4) {
                        Notno_p[7]++;
                        Notno_g[7]++;
                    }
                    NotT2_p[line_on_2 - 1]++;
                    NotT2_g[line_on_2 - 1]++;
                    if (line_on_2 < 4) {
                        NotT2_p[7]++;
                        NotT2_g[7]++;
                    }
                }
                if (counter == 0) {
                    Nos_p[line_on - 1]++;
                    Nos_g[line_on - 1]++;
                    if (line_on < 4) {
                        Nos_p[7]++;
                        Nos_g[7]++;
                    }
                    NosT2_p[line_on_2 - 1]++;
                    NosT2_g[line_on_2 - 1]++;
                    if (line_on_2 < 4) {
                        NosT2_p[7]++;
                        NosT2_g[7]++;
                    }
                }
                document.getElementById("start").innerHTML = "Stop";
                document.getElementById("start").style.background='#555555';
                is_on = 1;
                Counter();
            }
            else if (is_on == 1) {  // Stop game clock
                document.getElementById("start").innerHTML = "Start";
                document.getElementById("start").style.background='#4CAF50';
                is_on = 0;
                drawChart(); // Update charts
            }
        }
    }
    // Press the Reset button
    function Reset() {

    }
    // Press the Period button
    function Period() {
        var r = confirm("Changing period will reset clock and statistics,\nand save data, are you sure?");
            if (r == true) {
                periodN++
                counter = 0;
                document.getElementById("periodNr").innerHTML = "Period " + periodN;
                document.getElementById("label").innerHTML = "00:00:00";
                tgtp_2.innerHTML = "0";
                tgtp_1.innerHTML = "0";
                txGp_1.innerHTML = "0";
                txGp_2.innerHTML = "0";

                var ctx = cnvs.getContext("2d");
                ctx.drawImage(myImg,0,0,fWidth,fLength);
                PosTime = 0;
                LineTime = 0;
                dataShot = 0;
                dataRes = 0;
                dataxG = 0;
                shiftPos = 0;
                PosTime_2 = 0;
                LineTime_2 = 0;
                dataShot = 0;
                dataRes = 0;
                dataxG = 0;
                shiftPos_2 = 0;

                for (let i = 0; i < 8; i++) {

                    sf_p[i].innerHTML = 0;
                    sa_p[i].innerHTML = 0;
                    gf_p[i].innerHTML = 0;
                    ga_p[i].innerHTML = 0;
                    pm_p[i].innerHTML = 0;
                    bf_p[i].innerHTML = 0;
                    ba_p[i].innerHTML = 0;
                    mf_p[i].innerHTML = 0;
                    ma_p[i].innerHTML = 0;
                    saf_p[i].innerHTML = 0;
                    saa_p[i].innerHTML = 0;
                    xf_p[i].innerHTML = 0;
                    xa_p[i].innerHTML = 0;

                    Pos_p[i] = 0;
                    Toc_p[i] = 0;
                    xGf_p[i] = 0;
                    xGa_p[i] = 0;
                    Not_p[i] = 0;
                    Nos_p[i] = 0;
                    Notno_p[i] = 0;

                    p_p[i].innerHTML = 0;
                    toc_p[i].innerHTML = "00:00";
                    atoc_p[i].innerHTML = "00:00";
                    avg_p[i].innerHTML = "00:00";
                    avgno_p[i].innerHTML = "00:00";
                    
                    sfT2_p[i].innerHTML = 0;
                    saT2_p[i].innerHTML = 0;
                    gfT2_p[i].innerHTML = 0;
                    gaT2_p[i].innerHTML = 0;
                    pmT2_p[i].innerHTML = 0;
                    bfT2_p[i].innerHTML = 0;
                    baT2_p[i].innerHTML = 0;
                    mfT2_p[i].innerHTML = 0;
                    maT2_p[i].innerHTML = 0;
                    safT2_p[i].innerHTML = 0;
                    saaT2_p[i].innerHTML = 0;
                    xfT2_p[i].innerHTML = 0;
                    xaT2_p[i].innerHTML = 0;

                    PosT2_p[i] = 0;
                    TocT2_p[i] = 0;
                    xGfT2_p[i] = 0;
                    xGaT2_p[i] = 0;
                    NotT2_p[i] = 0;
                    NosT2_p[i] = 0;
                    NotnoT2_p[i] = 0;

                    pT2_p[i].innerHTML = 0;
                    tocT2_p[i].innerHTML = "00:00";
                    atocT2_p[i].innerHTML = "00:00";
                    avgT2_p[i].innerHTML = "00:00";
                    avgnoT2_p[i].innerHTML = "00:00";
                }

            } else {
            }
    }
    function Counter() {
        t = setTimeout(function(){ Count() }, 1000);
    }

    function Count() {
         if (is_on == 1) {

             Toc_p[line_on - 1]++;
             Toc_g[line_on - 1]++;
             if (line_on < 4) {
                 Toc_p[7]++;
                 Toc_g[7]++;
             }
             
             TocT2_p[line_on_2 - 1]++;
             TocT2_g[line_on_2 - 1]++;
             if (line_on_2 < 4) {
                 TocT2_p[7]++;
                 TocT2_g[7]++;
             }

             if (Ball_pos == 1) {
                Pos_p[line_on - 1]++;
                Pos_g[line_on - 1]++;
                shiftPos++;
                if (line_on < 4) {
                    Pos_g[7]++;
                    Pos_p[7]++;
                }
             }
             
             if (Ball_pos == 2) {
                PosT2_p[line_on_2 - 1]++;
                PosT2_g[line_on_2 - 1]++;
                shiftPos_2++;
                if (line_on_2 < 4) {
                    PosT2_g[7]++;
                    PosT2_p[7]++;
                }

             }
         else {

         }

             // Possession

             p_p[line_on - 1].innerHTML = Math.round(100 * Pos_p[line_on - 1] / Toc_p[line_on - 1]);
             p_p[7].innerHTML = Math.round(100 * Pos_p[7] / (Toc_p[0] + Toc_p[1] + Toc_p[2]));

             p_g[line_on - 1].innerHTML = Math.round(100 * Pos_g[line_on - 1] / Toc_g[line_on - 1]);
             p_g[7].innerHTML = Math.round(100 * Pos_g[7] / (Toc_g[0] + Toc_g[1] + Toc_g[2]));
             
             pT2_p[line_on_2 - 1].innerHTML = Math.round(100 * PosT2_p[line_on_2 - 1] / TocT2_p[line_on_2 - 1]);
             pT2_p[7].innerHTML = Math.round(100 * PosT2_p[7] / (TocT2_p[0] + TocT2_p[1] + TocT2_p[2]));

             pT2_g[line_on_2 - 1].innerHTML = Math.round(100 * PosT2_g[line_on_2 - 1] / TocT2_g[line_on_2 - 1]);
             pT2_g[7].innerHTML = Math.round(100 * PosT2_g[7] / (TocT2_g[0] + TocT2_g[1] + TocT2_g[2]));

             // Time on Court

             var toc = new Date(Toc_p[line_on - 1] * 1000);
             var d = toc.toISOString().substr(14, 5);
             toc_p[line_on - 1].innerHTML = d;

             var toc = new Date(Toc_g[line_on - 1] * 1000);
             var d = toc.toISOString().substr(14, 5);
             toc_g[line_on - 1].innerHTML = d;

             var toc = new Date(Toc_p[7] * 1000);
             var d = toc.toISOString().substr(14, 5);
             toc_p[7].innerHTML = d;

             var toc = new Date(Toc_g[7] * 1000);
             var d = toc.toISOString().substr(14, 5);
             toc_g[7].innerHTML = d;
             
             var toc = new Date(TocT2_p[line_on_2 - 1] * 1000);
             var d = toc.toISOString().substr(14, 5);
             tocT2_p[line_on_2 - 1].innerHTML = d;

             var toc = new Date(TocT2_g[line_on_2 - 1] * 1000);
             var d = toc.toISOString().substr(14, 5);
             tocT2_g[line_on_2 - 1].innerHTML = d;

             var toc = new Date(TocT2_p[7] * 1000);
             var d = toc.toISOString().substr(14, 5);
             tocT2_p[7].innerHTML = d;

             var toc = new Date(TocT2_g[7] * 1000);
             var d = toc.toISOString().substr(14, 5);
             tocT2_g[7].innerHTML = d;

             // Average Time on Ball

             if (Not_p[line_on - 1] > 0) {
                var avg = new Date(Math.round(Pos_p[line_on - 1] / Not_p[line_on - 1]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avg_p[line_on - 1].innerHTML = a;
             }
             if (Not_p[7] > 0) {
                var avg = new Date(Math.round(Pos_p[7] / Not_p[7]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avg_p[7].innerHTML = a;
             }
             if (Not_g[line_on - 1] > 0) {
                var avg = new Date(Math.round(Pos_g[line_on - 1] / Not_g[line_on - 1]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avg_g[line_on - 1].innerHTML = a;
             }
             if (Not_g[7] > 0) {
                var avg = new Date(Math.round(Pos_g[7] / Not_g[7]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avg_g[7].innerHTML = a;
             }
             
             if (NotT2_p[line_on_2 - 1] > 0) {
                var avg = new Date(Math.round(PosT2_p[line_on_2 - 1] / NotT2_p[line_on_2 - 1]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avgT2_p[line_on_2 - 1].innerHTML = a;
             }
             if (NotT2_p[7] > 0) {
                var avg = new Date(Math.round(PosT2_p[7] / NotT2_p[7]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avgT2_p[7].innerHTML = a;
             }
             if (NotT2_g[line_on_2 - 1] > 0) {
                var avg = new Date(Math.round(PosT2_g[line_on_2 - 1] / NotT2_g[line_on_2 - 1]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avgT2_g[line_on_2 - 1].innerHTML = a;
             }
             if (NotT2_g[7] > 0) {
                var avg = new Date(Math.round(PosT2_g[7] / NotT2_g[7]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avgT2_g[7].innerHTML = a;
             }

             // Average Time without Ball

             if (Notno_p[line_on - 1] > 0) {
                var avg = new Date(Math.round((Toc_p[line_on - 1] - Pos_p[line_on - 1]) / Notno_p[line_on - 1]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avgno_p[line_on - 1].innerHTML = a;
             }
             if (Notno_p[7] > 0) {
                var avg = new Date(Math.round((Toc_p[7] - Pos_p[7]) / Notno_p[7]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avgno_p[7].innerHTML = a;
             }
             if (Notno_g[line_on - 1] > 0) {
                var avg = new Date(Math.round((Toc_g[line_on - 1] - Pos_g[line_on - 1]) / Notno_g[line_on - 1]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avgno_g[line_on - 1].innerHTML = a;
             }
             if (Notno_g[7] > 0) {
                var avg = new Date(Math.round((Toc_g[7] - Pos_g[7]) / Notno_g[7]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avgno_g[7].innerHTML = a;
             }
             
             if (NotnoT2_p[line_on_2 - 1] > 0) {
                var avg = new Date(Math.round((TocT2_p[line_on_2 - 1] - PosT2_p[line_on_2 - 1]) / NotnoT2_p[line_on_2 - 1]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avgnoT2_p[line_on_2 - 1].innerHTML = a;
             }
             if (NotnoT2_p[7] > 0) {
                var avg = new Date(Math.round((TocT2_p[7] - PosT2_p[7]) / NotnoT2_p[7]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avgnoT2_p[7].innerHTML = a;
             }
             if (NotnoT2_g[line_on_2 - 1] > 0) {
                var avg = new Date(Math.round((TocT2_g[line_on_2 - 1] - PosT2_g[line_on_2 - 1]) / NotnoT2_g[line_on_2 - 1]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avgnoT2_g[line_on_2 - 1].innerHTML = a;
             }
             if (NotnoT2_g[7] > 0) {
                var avg = new Date(Math.round((TocT2_g[7] - PosT2_g[7]) / NotnoT2_g[7]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                avgnoT2_g[7].innerHTML = a;
             }

             // Average Time on Court

             if (Nos_p[line_on - 1] > 0) {
                var avg = new Date(Math.round(Toc_p[line_on - 1] / Nos_p[line_on - 1]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                atoc_p[line_on - 1].innerHTML = a;
             }
             if (Nos_p[7] > 0) {
                var avg = new Date(Math.round(Toc_p[7] / Nos_p[7]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                atoc_p[7].innerHTML = a;
             }
             if (Nos_g[line_on - 1] > 0) {
                var avg = new Date(Math.round(Toc_g[line_on - 1] / Nos_g[line_on - 1]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                atoc_g[line_on - 1].innerHTML = a;
             }
             if (Nos_g[7] > 0) {
                var avg = new Date(Math.round(Toc_g[7] / Nos_g[7]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                atoc_g[7].innerHTML = a;
             }
             
             if (NosT2_p[line_on_2 - 1] > 0) {
                var avg = new Date(Math.round(TocT2_p[line_on_2 - 1] / NosT2_p[line_on_2 - 1]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                atocT2_p[line_on_2 - 1].innerHTML = a;
             }
             if (NosT2_p[7] > 0) {
                var avg = new Date(Math.round(TocT2_p[7] / NosT2_p[7]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                atocT2_p[7].innerHTML = a;
             }
             if (NosT2_g[line_on_2 - 1] > 0) {
                var avg = new Date(Math.round(TocT2_g[line_on_2 - 1] / NosT2_g[line_on_2 - 1]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                atocT2_g[line_on_2 - 1].innerHTML = a;
             }
             if (NosT2_g[7] > 0) {
                var avg = new Date(Math.round(TocT2_g[7] / NosT2_g[7]) * 1000);
                var a = avg.toISOString().substr(14, 5);
                atocT2_g[7].innerHTML = a;
             }

             // Add one row to timeData - array
             timeData.push([gameCounter, Ball_pos, line_on, line_on_2, dataShot, dataRes, dataxG]);

             // Add one row to the xG arrays every minute
             if (gameCounter % 60 == 0) {

                 var date = new Date(gameCounter * 1000);
                 var display = date.toISOString().substr(11, 8);
                 xGTeam_array.push([display, xGf_g[7], xGa_g[7], 0, 0]);
                 xGL1_array.push([display, xGf_g[0], xGa_g[0], 0, 0]);
                 xGL2_array.push([display, xGf_g[1], xGa_g[1], 0, 0]);
                 xGL3_array.push([display, xGf_g[2], xGa_g[2], 0, 0]);
                 xGTeamT2_array.push([display, xGfT2_g[7], xGaT2_g[7], 0, 0]);
                 xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], 0, 0]);
                 xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], 0, 0]);
                 xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], 0, 0]);
             }

             dataShot = 0;
             dataRes = 0;
             dataxG = 0;

             counter++;
             gameCounter++;
             PosTime++;
             LineTime++;
             PosTime_2++;
             LineTime_2++;

             var date = new Date(counter * 1000);
             var display = date.toISOString().substr(11, 8);
             document.getElementById("label").innerHTML = display;

             t = setTimeout(function(){ Count() }, 1000);
         }
    }

    function FindPosition(oElement)
    {
      if(typeof( oElement.offsetParent ) != "undefined")
      {
        for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
        {
          posX += oElement.offsetLeft;
          posY += oElement.offsetTop;
        }
          return [ posX, posY ];
        }
        else
        {
          return [ oElement.x, oElement.y ];
        }
    }

    function GetCoordinates(e)
    {
        var ImgPos;
        ImgPos = FindPosition(cnvs);
        if (!e) var e = window.event;
        if (e.pageX || e.pageY)
        {
        PosX = e.pageX;
        PosY = e.pageY;
        }
        else if (e.clientX || e.clientY)
        {
          PosX = e.clientX + document.body.scrollLeft
            + document.documentElement.scrollLeft;
          PosY = e.clientY + document.body.scrollTop
            + document.documentElement.scrollTop;
        }

        stype.style.display = "block";
        if (PosY <= 4*fLength/5)
        {
            stype.style.top = PosY + "px";
        }
        else
        {
            stype.style.top = (PosY-(fLength/4)) + "px";
        }
        stype.style.left = PosX + "px";

        PosX = PosX - ImgPos[0];
        PosY = PosY - ImgPos[1];
    }

    function shotMissed() {
        Draw(PosX,PosY,1);
    }

    function shotBlocked() {
        Draw(PosX,PosY,3);
    }

    function shotSaved() {
        Draw(PosX,PosY,2);

        var dx = PosX / fWidth;
        var dy = PosY / fLength;

        if (Order == 1 && Ball_pos == 1) { // Team 1 shot, Team 1 lower side

            if (dy < 0.5) { // Ball on the attack zone
                var dxG = xG_matrix[Math.floor(dy*2*14)][Math.floor(dx*13)] / 100;

                if (dataType == 1) { // turnover x 1,25 xG
                    dxG = dxG * 1.25;
                }
                if (dataType == 2) { // onetimer x 1,5 xG
                    dxG = dxG * 1.5;
                }
                if (dataType == 3) { // rebound x 1,1 xG
                    dxG = dxG * 1.1;
                }
                if (dataType == 4) { //direct x 0,85 xg
                    dxG = dxG * 0.85;
                }

                xGf_p[line_on - 1] = Math.round((xGf_p[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGf_p[7] = Math.round((xGf_p[7] + dxG) * 100) / 100;
                }
                xGf_g[line_on - 1] = Math.round((xGf_g[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGf_g[7]= Math.round((xGf_g[7] + dxG) * 100) / 100;
                }
                
                xGaT2_p[line_on_2 - 1] = Math.round((xGaT2_p[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGaT2_p[7] = Math.round((xGaT2_p[7] + dxG) * 100) / 100;
                }
                xGaT2_g[line_on_2 - 1] = Math.round((xGaT2_g[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGaT2_g[7]= Math.round((xGaT2_g[7] + dxG) * 100) / 100;
                }

                xf_p[line_on - 1].innerHTML = xGf_p[line_on - 1];
                if (line_on < 4) {
                    xf_p[7].innerHTML = xGf_p[7];
                }
                xf_g[line_on - 1].innerHTML = xGf_g[line_on - 1];;
                if (line_on < 4) {
                    xf_g[7].innerHTML = xGf_g[7];
                }
                
                xaT2_p[line_on_2 - 1].innerHTML = xGaT2_p[line_on_2 - 1];
                if (line_on_2 < 4) {
                    xaT2_p[7].innerHTML = xGaT2_p[7];
                }
                xaT2_g[line_on_2 - 1].innerHTML = xGaT2_g[line_on_2 - 1];;
                if (line_on_2 < 4) {
                    xaT2_g[7].innerHTML = xGaT2_g[7];
                }
                
                dataxG = dxG;
                var date = new Date(gameCounter * 1000);
                var display = date.toISOString().substr(11, 8);
                xGTeam_array.push([display, xGf_g[7], xGa_g[7], 0, 0]);
                xGL1_array.push([display, xGf_g[0], xGa_g[0], 0, 0]);
                xGL2_array.push([display, xGf_g[1], xGa_g[1], 0, 0]);
                xGL3_array.push([display, xGf_g[2], xGa_g[2], 0, 0]);
                xGTeamT2_array.push([display, xGfT2_g[7], xGaT2_g[7], 0, 0]);
                xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], 0, 0]);
                xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], 0, 0]);
                xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], 0, 0]);

                b = Number(txG_1.innerHTML);
                a = Math.round((b + dxG) * 100) / 100;
                txG_1.innerHTML = a;

                b = Number(txGp_1.innerHTML);
                a = Math.round((b + dxG) * 100) / 100;
                txGp_1.innerHTML = a;
            }
        }

        if (Order == 2 && Ball_pos == 1) { // Team 1 shot, Team 1 upper side

            if (dy > 0.5) { // Ball on the attack zone
                var dxG = xG_matrix[13-Math.floor((dy-0.5)*2*13)][12-Math.floor(dx*12)] / 100;

                if (dataType == 1) { // turnover x 1,25 xG
                    dxG = dxG * 1.25;
                }
                if (dataType == 2) { // onetimer x 1,5 xG
                    dxG = dxG * 1.5;
                }
                if (dataType == 3) { // rebound x 1,1 xG
                    dxG = dxG * 1.1;
                }
                if (dataType == 4) { //direct x 0,85 xg
                    dxG = dxG * 0.85;
                }

                xGf_p[line_on - 1] = Math.round((xGf_p[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGf_p[7] = Math.round((xGf_p[7] + dxG) * 100) / 100;
                }
                xGf_g[line_on - 1] = Math.round((xGf_g[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGf_g[7]= Math.round((xGf_g[7] + dxG) * 100) / 100;
                }
                
                xGaT2_p[line_on_2 - 1] = Math.round((xGaT2_p[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGaT2_p[7] = Math.round((xGaT2_p[7] + dxG) * 100) / 100;
                }
                xGaT2_g[line_on_2 - 1] = Math.round((xGaT2_g[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGaT2_g[7]= Math.round((xGaT2_g[7] + dxG) * 100) / 100;
                }
                
                xf_p[line_on - 1].innerHTML = xGf_p[line_on - 1];
                if (line_on < 4) {
                    xf_p[7].innerHTML = xGf_p[7];
                }
                xf_g[line_on - 1].innerHTML = xGf_g[line_on - 1];
                if (line_on < 4) {
                    xf_g[7].innerHTML = xGf_g[7];
                }
                
                xaT2_p[line_on_2 - 1].innerHTML = xGaT2_p[line_on_2 - 1];
                if (line_on_2 < 4) {
                    xaT2_p[7].innerHTML = xGaT2_p[7];
                }
                xaT2_g[line_on_2 - 1].innerHTML = xGaT2_g[line_on_2 - 1];;
                if (line_on_2 < 4) {
                    xaT2_g[7].innerHTML = xGaT2_g[7];
                }
                
                dataxG = dxG;
                var date = new Date(gameCounter * 1000);
                var display = date.toISOString().substr(11, 8);
                xGTeam_array.push([display, xGf_g[7], xGa_g[7], 0, 0]);
                xGL1_array.push([display, xGf_g[0], xGa_g[0], 0, 0]);
                xGL2_array.push([display, xGf_g[1], xGa_g[1], 0, 0]);
                xGL3_array.push([display, xGf_g[2], xGa_g[2], 0, 0]);
                xGTeamT2_array.push([display, xGfT2_g[7], xGaT2_g[7], 0, 0]);
                xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], 0, 0]);
                xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], 0, 0]);
                xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], 0, 0]);

                b = Number(txG_1.innerHTML);
                a = Math.round((b + dxG) * 100) / 100;
                txG_1.innerHTML = a;

                b = Number(txGp_1.innerHTML);
                a = Math.round((b + dxG) * 100) / 100;
                txGp_1.innerHTML = a;
            }
        }

        if (Order == 1 && Ball_pos == 2) { // Team 2 shot, Team 2 upper side

            if (dy > 0.5) { // Ball on the attack zone
                var dxG = xG_matrix[13-Math.floor((dy-0.5)*2*13)][12-Math.floor(dx*12)] / 100;

                if (dataType == 1) { // turnover x 1,25 xG
                    dxG = dxG * 1.25;
                }
                if (dataType == 2) { // onetimer x 1,5 xG
                    dxG = dxG * 1.5;
                }
                if (dataType == 3) { // rebound x 1,1 xG
                    dxG = dxG * 1.1;
                }
                if (dataType == 4) { //direct x 0,85 xg
                    dxG = dxG * 0.85;
                }

                xGa_p[line_on - 1] = Math.round((xGa_p[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGa_p[7] = Math.round((xGa_p[7] + dxG) * 100) / 100;
                }
                xGa_g[line_on - 1] = Math.round((xGa_g[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGa_g[7]= Math.round((xGa_g[7] + dxG) * 100) / 100;
                }
                
                xGfT2_p[line_on_2 - 1] = Math.round((xGfT2_p[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGfT2_p[7] = Math.round((xGfT2_p[7] + dxG) * 100) / 100;
                }
                xGfT2_g[line_on_2 - 1] = Math.round((xGfT2_g[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGfT2_g[7]= Math.round((xGfT2_g[7] + dxG) * 100) / 100;
                }
                
                xa_p[line_on - 1].innerHTML = xGa_p[line_on - 1];
                if (line_on < 4) {
                    xa_p[7].innerHTML = xGa_p[7];
                }
                xa_g[line_on - 1].innerHTML = xGa_g[line_on - 1];
                if (line_on < 4) {
                    xa_g[7].innerHTML = xGa_g[7];
                }
                
                xfT2_p[line_on_2 - 1].innerHTML = xGfT2_p[line_on_2 - 1];
                if (line_on_2 < 4) {
                    xfT2_p[7].innerHTML = xGfT2_p[7];
                }
                xfT2_g[line_on_2 - 1].innerHTML = xGfT2_g[line_on_2 - 1];;
                if (line_on_2 < 4) {
                    xfT2_g[7].innerHTML = xGfT2_g[7];
                }
                
                dataxG = dxG;
                var date = new Date(gameCounter * 1000);
                var display = date.toISOString().substr(11, 8);
                xGTeam_array.push([display, xGf_g[7], xGa_g[7], 0, 0]);
                xGL1_array.push([display, xGf_g[0], xGa_g[0], 0, 0]);
                xGL2_array.push([display, xGf_g[1], xGa_g[1], 0, 0]);
                xGL3_array.push([display, xGf_g[2], xGa_g[2], 0, 0]);
                xGTeamT2_array.push([display, xGfT2_g[7], xGaT2_g[7], 0, 0]);
                xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], 0, 0]);
                xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], 0, 0]);
                xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], 0, 0]);

                b = Number(txG_2.innerHTML);
                a = Math.round((b + dxG) * 100) / 100;
                txG_2.innerHTML = a;

                b = Number(txGp_2.innerHTML);
                a = Math.round((b + dxG) * 100) / 100;
                txGp_2.innerHTML = a;
            }
        }

        if (Order == 2 && Ball_pos == 2) { // Team 2 shot, Team 2 lower side

            if (dy < 0.5) { // Ball on the attack zone
                var dxG = xG_matrix[Math.floor(dy*2*14)][Math.floor(dx*13)] / 100;

                if (dataType == 1) { // turnover x 1,25 xG
                    dxG = dxG * 1.25;
                }
                if (dataType == 2) { // onetimer x 1,5 xG
                    dxG = dxG * 1.5;
                }
                if (dataType == 3) { // rebound x 1,1 xG
                    dxG = dxG * 1.1;
                }
                if (dataType == 4) { //direct x 0,85 xg
                    dxG = dxG * 0.85;
                }


                xGa_p[line_on - 1] = Math.round((xGa_p[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGa_p[7] = Math.round((xGa_p[7] + dxG) * 100) / 100;
                }
                xGa_g[line_on - 1] = Math.round((xGa_g[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGa_g[7]= Math.round((xGa_g[7] + dxG) * 100) / 100;
                }
                
                xGfT2_p[line_on_2 - 1] = Math.round((xGfT2_p[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGfT2_p[7] = Math.round((xGfT2_p[7] + dxG) * 100) / 100;
                }
                xGfT2_g[line_on_2 - 1] = Math.round((xGfT2_g[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGfT2_g[7]= Math.round((xGfT2_g[7] + dxG) * 100) / 100;
                }
                
                xa_p[line_on - 1].innerHTML = xGa_p[line_on - 1];
                if (line_on < 4) {
                    xa_p[7].innerHTML = xGa_p[7];
                }
                xa_g[line_on - 1].innerHTML = xGa_g[line_on - 1];
                if (line_on < 4) {
                    xa_g[7].innerHTML = xGa_g[7];
                }
                
                xfT2_p[line_on_2 - 1].innerHTML = xGfT2_p[line_on_2 - 1];
                if (line_on_2 < 4) {
                    xfT2_p[7].innerHTML = xGfT2_p[7];
                }
                xfT2_g[line_on_2 - 1].innerHTML = xGfT2_g[line_on_2 - 1];;
                if (line_on_2 < 4) {
                    xfT2_g[7].innerHTML = xGfT2_g[7];
                }
                
                dataxG = dxG;
                var date = new Date(gameCounter * 1000);
                var display = date.toISOString().substr(11, 8);
                xGTeam_array.push([display, xGf_g[7], xGa_g[7], 0, 0]);
                xGL1_array.push([display, xGf_g[0], xGa_g[0], 0, 0]);
                xGL2_array.push([display, xGf_g[1], xGa_g[1], 0, 0]);
                xGL3_array.push([display, xGf_g[2], xGa_g[2], 0, 0]);
                xGTeamT2_array.push([display, xGfT2_g[7], xGaT2_g[7], 0, 0]);
                xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], 0, 0]);
                xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], 0, 0]);
                xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], 0, 0]);

                b = Number(txG_2.innerHTML);
                a = Math.round((b + dxG) * 100) / 100;
                txG_2.innerHTML = a;

                b = Number(txGp_2.innerHTML);
                a = Math.round((b + dxG) * 100) / 100;
                txGp_2.innerHTML = a;
            }
        }
    }

    function shotGoal() {
        Draw(PosX,PosY,4);

        var dx = PosX / fWidth;
        var dy = PosY / fLength;

        if (Order == 1 && Ball_pos == 1) { // Team 1 shot, Team 1 lower side

            if (dy < 0.5) { // Ball on the attack zone
                var dxG = xG_matrix[Math.floor(dy*2*14)][Math.floor(dx*13)] / 100;

                if (dataType == 1) { // turnover x 1,25 xG
                    dxG = dxG * 1.25;
                }
                if (dataType == 2) { // onetimer x 1,5 xG
                    dxG = dxG * 1.5;
                }
                if (dataType == 3) { // rebound x 1,1 xG
                    dxG = dxG * 1.1;
                }
                if (dataType == 4) { //direct x 0,85 xg
                    dxG = dxG * 0.85;
                }

                xGf_p[line_on - 1] = Math.round((xGf_p[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGf_p[7] = Math.round((xGf_p[7] + dxG) * 100) / 100;
                }
                xGf_g[line_on - 1] = Math.round((xGf_g[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGf_g[7]= Math.round((xGf_g[7] + dxG) * 100) / 100;
                }
                
                xGaT2_p[line_on_2 - 1] = Math.round((xGaT2_p[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGaT2_p[7] = Math.round((xGaT2_p[7] + dxG) * 100) / 100;
                }
                xGaT2_g[line_on_2 - 1] = Math.round((xGaT2_g[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGaT2_g[7]= Math.round((xGaT2_g[7] + dxG) * 100) / 100;
                }

                xf_p[line_on - 1].innerHTML = xGf_p[line_on - 1];
                if (line_on < 4) {
                    xf_p[7].innerHTML = xGf_p[7];
                }
                xf_g[line_on - 1].innerHTML = xGf_g[line_on - 1];;
                if (line_on < 4) {
                    xf_g[7].innerHTML = xGf_g[7];
                }
                
                xaT2_p[line_on_2 - 1].innerHTML = xGaT2_p[line_on_2 - 1];
                if (line_on_2 < 4) {
                    xaT2_p[7].innerHTML = xGaT2_p[7];
                }
                xaT2_g[line_on_2 - 1].innerHTML = xGaT2_g[line_on_2 - 1];;
                if (line_on_2 < 4) {
                    xaT2_g[7].innerHTML = xGaT2_g[7];
                }
                
                dataxG = dxG;
                var date = new Date(gameCounter * 1000);
                var display = date.toISOString().substr(11, 8);
                xGTeam_array.push([display, xGf_g[7], xGa_g[7], xGf_g[7], 0]);
                xGTeamT2_array.push([display, xGfT2_g[7], xGaT2_g[7], xGfT2_g[7], 0]);

                b = Number(txG_1.innerHTML);
                a = Math.round((b + dxG) * 100) / 100;
                txG_1.innerHTML = a;

                c = Number(txGp_1.innerHTML);
                d = Math.round((c + dxG) * 100) / 100;
                txGp_1.innerHTML = d;

                if (line_on == 1) {
                    xGL1_array.push([display, xGf_g[0], xGa_g[0], xGf_g[0], 0]);
                    xGL2_array.push([display, xGf_g[1], xGa_g[1], 0, 0]);
                    xGL3_array.push([display, xGf_g[2], xGa_g[2], 0, 0]);
                }

                if (line_on == 2) {
                    xGL2_array.push([display, xGf_g[1], xGa_g[1], xGf_g[1], 0]);
                    xGL1_array.push([display, xGf_g[0], xGa_g[0], 0, 0]);
                    xGL3_array.push([display, xGf_g[2], xGa_g[2], 0, 0]);
                }

                if (line_on == 3) {
                    xGL3_array.push([display, xGf_g[2], xGa_g[2], xGf_g[2], 0]);
                    xGL1_array.push([display, xGf_g[0], xGa_g[0], 0, 0]);
                    xGL2_array.push([display, xGf_g[1], xGa_g[1], 0, 0]);
                }

                if (line_on_2 == 1) {
                    xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], xGfT2_g[0], 0]);
                    xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], 0, 0]);
                    xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], 0, 0]);
                }

                if (line_on_2 == 2) {
                    xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], xGfT2_g[1], 0]);
                    xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], 0, 0]);
                    xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], 0, 0]);
                }

                if (line_on_2 == 3) {
                    xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], xGfT2_g[2], 0]);
                    xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], 0, 0]);
                    xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], 0, 0]);
                }
            }
        }

        if (Order == 2 && Ball_pos == 1) { // Team 1 shot, Team 1 upper side

            if (dy > 0.5) { // Ball on the attack zone
                var dxG = xG_matrix[13-Math.floor((dy-0.5)*2*13)][12-Math.floor(dx*12)] / 100;

                if (dataType == 1) { // turnover x 1,25 xG
                    dxG = dxG * 1.25;
                }
                if (dataType == 2) { // onetimer x 1,5 xG
                    dxG = dxG * 1.5;
                }
                if (dataType == 3) { // rebound x 1,1 xG
                    dxG = dxG * 1.1;
                }
                if (dataType == 4) { //direct x 0,85 xg
                    dxG = dxG * 0.85;
                }

                xGf_p[line_on - 1] = Math.round((xGf_p[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGf_p[7] = Math.round((xGf_p[7] + dxG) * 100) / 100;
                }
                xGf_g[line_on - 1] = Math.round((xGf_g[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGf_g[7]= Math.round((xGf_g[7] + dxG) * 100) / 100;
                }

                xGaT2_p[line_on_2 - 1] = Math.round((xGaT2_p[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGaT2_p[7] = Math.round((xGaT2_p[7] + dxG) * 100) / 100;
                }
                xGaT2_g[line_on_2 - 1] = Math.round((xGaT2_g[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGaT2_g[7]= Math.round((xGaT2_g[7] + dxG) * 100) / 100;
                }

                xf_p[line_on - 1].innerHTML = xGf_p[line_on - 1];
                if (line_on < 4) {
                    xf_p[7].innerHTML = xGf_p[7];
                }
                xf_g[line_on - 1].innerHTML = xGf_g[line_on - 1];
                if (line_on < 4) {
                    xf_g[7].innerHTML = xGf_g[7];
                }

                xaT2_p[line_on_2 - 1].innerHTML = xGaT2_p[line_on_2 - 1];
                if (line_on_2 < 4) {
                    xaT2_p[7].innerHTML = xGaT2_p[7];
                }
                xaT2_g[line_on_2 - 1].innerHTML = xGaT2_g[line_on_2 - 1];;
                if (line_on_2 < 4) {
                    xaT2_g[7].innerHTML = xGaT2_g[7];
                }

                dataxG = dxG;
                var date = new Date(gameCounter * 1000);
                var display = date.toISOString().substr(11, 8);
                xGTeam_array.push([display, xGf_g[7], xGa_g[7], xGf_g[7], 0]);
                xGTeamT2_array.push([display, xGfT2_g[7], xGaT2_g[7], xGfT2_g[7], 0]);

                b = Number(txG_1.innerHTML);
                a = Math.round((b + dxG) * 100) / 100;
                txG_1.innerHTML = a;

                c = Number(txGp_1.innerHTML);
                d = Math.round((c + dxG) * 100) / 100;
                txGp_1.innerHTML = d;

                if (line_on == 1) {
                    xGL1_array.push([display, xGf_g[0], xGa_g[0], xGf_g[0], 0]);
                    xGL2_array.push([display, xGf_g[1], xGa_g[1], 0, 0]);
                    xGL3_array.push([display, xGf_g[2], xGa_g[2], 0, 0]);
                }

                if (line_on == 2) {
                    xGL2_array.push([display, xGf_g[1], xGa_g[1], xGf_g[1], 0]);
                    xGL1_array.push([display, xGf_g[0], xGa_g[0], 0, 0]);
                    xGL3_array.push([display, xGf_g[2], xGa_g[2], 0, 0]);
                }

                if (line_on == 3) {
                    xGL3_array.push([display, xGf_g[2], xGa_g[2], xGf_g[2], 0]);
                    xGL1_array.push([display, xGf_g[0], xGa_g[0], 0, 0]);
                    xGL2_array.push([display, xGf_g[1], xGa_g[1], 0, 0]);
                }

                if (line_on_2 == 1) {
                    xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], xGfT2_g[0], 0]);
                    xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], 0, 0]);
                    xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], 0, 0]);
                }

                if (line_on_2 == 2) {
                    xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], xGfT2_g[1], 0]);
                    xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], 0, 0]);
                    xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], 0, 0]);
                }

                if (line_on_2 == 3) {
                    xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], xGfT2_g[2], 0]);
                    xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], 0, 0]);
                    xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], 0, 0]);
                }
            }
        }

        if (Order == 1 && Ball_pos == 2) { // Team 2 shot, Team 2 upper side

            if (dy > 0.5) { // Ball on the attack zone
                var dxG = xG_matrix[13-Math.floor((dy-0.5)*2*13)][12-Math.floor(dx*12)] / 100;

                if (dataType == 1) { // turnover x 1,25 xG
                    dxG = dxG * 1.25;
                }
                if (dataType == 2) { // onetimer x 1,5 xG
                    dxG = dxG * 1.5;
                }
                if (dataType == 3) { // rebound x 1,1 xG
                    dxG = dxG * 1.1;
                }
                if (dataType == 4) { //direct x 0,85 xg
                    dxG = dxG * 0.85;
                }

                xGa_p[line_on - 1] = Math.round((xGa_p[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGa_p[7] = Math.round((xGa_p[7] + dxG) * 100) / 100;
                }
                xGa_g[line_on - 1] = Math.round((xGa_g[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGa_g[7]= Math.round((xGa_g[7] + dxG) * 100) / 100;
                }

                xGfT2_p[line_on_2 - 1] = Math.round((xGfT2_p[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGfT2_p[7] = Math.round((xGfT2_p[7] + dxG) * 100) / 100;
                }
                xGfT2_g[line_on_2 - 1] = Math.round((xGfT2_g[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGfT2_g[7]= Math.round((xGfT2_g[7] + dxG) * 100) / 100;
                }

                xa_p[line_on - 1].innerHTML = xGa_p[line_on - 1];
                if (line_on < 4) {
                    xa_p[7].innerHTML = xGa_p[7];
                }
                xa_g[line_on - 1].innerHTML = xGa_g[line_on - 1];
                if (line_on < 4) {
                    xa_g[7].innerHTML = xGa_g[7];
                }

                xfT2_p[line_on_2 - 1].innerHTML = xGfT2_p[line_on_2 - 1];
                if (line_on_2 < 4) {
                    xfT2_p[7].innerHTML = xGfT2_p[7];
                }
                xfT2_g[line_on_2 - 1].innerHTML = xGfT2_g[line_on_2 - 1];;
                if (line_on_2 < 4) {
                    xfT2_g[7].innerHTML = xGfT2_g[7];
                }

                dataxG = dxG;
                var date = new Date(gameCounter * 1000);
                var display = date.toISOString().substr(11, 8);
                xGTeam_array.push([display, xGf_g[7], xGa_g[7], 0, xGa_g[7]]);
                xGTeamT2_array.push([display, xGfT2_g[7], xGaT2_g[7], 0, xGaT2_g[7]]);

                b = Number(txG_2.innerHTML);
                a = Math.round((b + dxG) * 100) / 100;
                txG_2.innerHTML = a;

                c = Number(txGp_2.innerHTML);
                d = Math.round((c + dxG) * 100) / 100;
                txGp_2.innerHTML = d;

                if (line_on == 1) {
                    xGL1_array.push([display, xGf_g[0], xGa_g[0], xGf_g[0], 0]);
                    xGL2_array.push([display, xGf_g[1], xGa_g[1], 0, 0]);
                    xGL3_array.push([display, xGf_g[2], xGa_g[2], 0, 0]);
                }

                if (line_on == 2) {
                    xGL2_array.push([display, xGf_g[1], xGa_g[1], xGf_g[1], 0]);
                    xGL1_array.push([display, xGf_g[0], xGa_g[0], 0, 0]);
                    xGL3_array.push([display, xGf_g[2], xGa_g[2], 0, 0]);
                }

                if (line_on == 3) {
                    xGL3_array.push([display, xGf_g[2], xGa_g[2], xGf_g[2], 0]);
                    xGL1_array.push([display, xGf_g[0], xGa_g[0], 0, 0]);
                    xGL2_array.push([display, xGf_g[1], xGa_g[1], 0, 0]);
                }

                if (line_on_2 == 1) {
                    xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], xGfT2_g[0], 0]);
                    xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], 0, 0]);
                    xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], 0, 0]);
                }

                if (line_on_2 == 2) {
                    xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], xGfT2_g[1], 0]);
                    xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], 0, 0]);
                    xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], 0, 0]);
                }

                if (line_on_2 == 3) {
                    xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], xGfT2_g[2], 0]);
                    xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], 0, 0]);
                    xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], 0, 0]);
                }
            }
        }

        if (Order == 2 && Ball_pos == 2) { // Team 2 shot, Team 2 lower side

            if (dy < 0.5) { // Ball on the attack zone
                var dxG = xG_matrix[Math.floor(dy*2*14)][Math.floor(dx*13)] / 100;

                if (dataType == 1) { // turnover x 1,25 xG
                    dxG = dxG * 1.25;
                }
                if (dataType == 2) { // onetimer x 1,5 xG
                    dxG = dxG * 1.5;
                }
                if (dataType == 3) { // rebound x 1,1 xG
                    dxG = dxG * 1.1;
                }
                if (dataType == 4) { //direct x 0,85 xg
                    dxG = dxG * 0.85;
                }

                xGa_p[line_on - 1] = Math.round((xGa_p[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGa_p[7] = Math.round((xGa_p[7] + dxG) * 100) / 100;
                }
                xGa_g[line_on - 1] = Math.round((xGa_g[line_on - 1] + dxG) * 100) / 100;
                if (line_on < 4) {
                    xGa_g[7]= Math.round((xGa_g[7] + dxG) * 100) / 100;
                }

                xGfT2_p[line_on_2 - 1] = Math.round((xGfT2_p[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGfT2_p[7] = Math.round((xGfT2_p[7] + dxG) * 100) / 100;
                }
                xGfT2_g[line_on_2 - 1] = Math.round((xGfT2_g[line_on_2 - 1] + dxG) * 100) / 100;
                if (line_on_2 < 4) {
                    xGfT2_g[7]= Math.round((xGfT2_g[7] + dxG) * 100) / 100;
                }

                xa_p[line_on - 1].innerHTML = xGa_p[line_on - 1];
                if (line_on < 4) {
                    xa_p[7].innerHTML = xGa_p[7];
                }
                xa_g[line_on - 1].innerHTML = xGa_g[line_on - 1];
                if (line_on < 4) {
                    xa_g[7].innerHTML = xGa_g[7];
                }

                xfT2_p[line_on_2 - 1].innerHTML = xGfT2_p[line_on_2 - 1];
                if (line_on_2 < 4) {
                    xfT2_p[7].innerHTML = xGfT2_p[7];
                }
                xfT2_g[line_on_2 - 1].innerHTML = xGfT2_g[line_on_2 - 1];;
                if (line_on_2 < 4) {
                    xfT2_g[7].innerHTML = xGfT2_g[7];
                }

                dataxG = dxG;
                var date = new Date(gameCounter * 1000);
                var display = date.toISOString().substr(11, 8);
                xGTeam_array.push([display, xGf_g[7], xGa_g[7], 0, xGa_g[7]]);
                xGTeamT2_array.push([display, xGfT2_g[7], xGaT2_g[7], 0, xGaT2_g[7]]);

                b = Number(txG_2.innerHTML);
                a = Math.round((b + dxG) * 100) / 100;
                txG_2.innerHTML = a;

                b = Number(txGp_2.innerHTML);
                a = Math.round((b + dxG) * 100) / 100;
                txGp_2.innerHTML = a;

                if (line_on == 1) {
                    xGL1_array.push([display, xGf_g[0], xGa_g[0], xGf_g[0], 0]);
                    xGL2_array.push([display, xGf_g[1], xGa_g[1], 0, 0]);
                    xGL3_array.push([display, xGf_g[2], xGa_g[2], 0, 0]);
                }

                if (line_on == 2) {
                    xGL2_array.push([display, xGf_g[1], xGa_g[1], xGf_g[1], 0]);
                    xGL1_array.push([display, xGf_g[0], xGa_g[0], 0, 0]);
                    xGL3_array.push([display, xGf_g[2], xGa_g[2], 0, 0]);
                }

                if (line_on == 3) {
                    xGL3_array.push([display, xGf_g[2], xGa_g[2], xGf_g[2], 0]);
                    xGL1_array.push([display, xGf_g[0], xGa_g[0], 0, 0]);
                    xGL2_array.push([display, xGf_g[1], xGa_g[1], 0, 0]);
                }

                if (line_on_2 == 1) {
                    xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], xGfT2_g[0], 0]);
                    xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], 0, 0]);
                    xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], 0, 0]);
                }

                if (line_on_2 == 2) {
                    xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], xGfT2_g[1], 0]);
                    xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], 0, 0]);
                    xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], 0, 0]);
                }

                if (line_on_2 == 3) {
                    xGL3T2_array.push([display, xGfT2_g[2], xGaT2_g[2], xGfT2_g[2], 0]);
                    xGL1T2_array.push([display, xGfT2_g[0], xGaT2_g[0], 0, 0]);
                    xGL2T2_array.push([display, xGfT2_g[1], xGaT2_g[1], 0, 0]);
                }
            }
        }
    }

    function Draw(x,y,type)
    {
        var ctx = cnvs.getContext("2d");
        menu.style.display = "none";
        ctx.font = "12px Arial";

        if (Ball_pos == 1) {
            ctx.fillStyle = "blue";
            dataShot = 1;

            if (type == 1) {    // Shot Missed
                ctx.fillText("M", x, y);
                dataRes = 1;

                sf_p[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    sf_p[7].innerHTML++;
                }
                sf_g[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    sf_g[7].innerHTML++;
                }
                mf_p[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    mf_p[7].innerHTML++;
                }
                mf_g[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    mf_g[7].innerHTML++;
                }

                saT2_p[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    saT2_p[7].innerHTML++;
                }
                saT2_g[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    saT2_g[7].innerHTML++;
                }
                maT2_p[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    maT2_p[7].innerHTML++;
                }
                maT2_g[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    maT2_g[7].innerHTML++;
                }
            }
            else if (type == 3) {   // Shot Blocked
                ctx.fillText("B", x, y);
                dataRes = 3;

                sf_p[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    sf_p[7].innerHTML++;
                }
                sf_g[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    sf_g[7].innerHTML++;
                }
                ba_g[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    ba_g[7].innerHTML++;
                }
                ba_p[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    ba_p[7].innerHTML++;
                }

                saT2_p[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    saT2_p[7].innerHTML++;
                }
                saT2_g[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    saT2_g[7].innerHTML++;
                }
                bfT2_g[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    bfT2_g[7].innerHTML++;
                }
                bfT2_p[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    bfT2_p[7].innerHTML++;
                }
            }
            else if (type == 2) {   // Shot Saved
                ctx.fillText("S", x, y);
                dataRes = 2;

                sf_p[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    sf_p[7].innerHTML++;
                }
                sf_g[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    sf_g[7].innerHTML++;
                }
                saf_p[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    saf_p[7].innerHTML++;
                }
                saf_g[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    saf_g[7].innerHTML++;
                }

                saT2_p[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    saT2_p[7].innerHTML++;
                }
                saT2_g[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    saT2_g[7].innerHTML++;
                }
                saaT2_p[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    saaT2_p[7].innerHTML++;
                }
                saaT2_g[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    saaT2_g[7].innerHTML++;
                }
            }
            else if (type == 4) {   // Shot Goal
                ctx.fillText("G", x, y);
                dataRes = 4;

                sf_p[line_on - 1].innerHTML++;
                gf_p[line_on - 1].innerHTML++;
                pm_p[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    sf_p[7].innerHTML++;
                    gf_p[7].innerHTML++;
                    pm_p[7].innerHTML++;
                }

                sf_g[line_on - 1].innerHTML++;
                gf_g[line_on - 1].innerHTML++;
                pm_g[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    sf_g[7].innerHTML++;
                    gf_g[7].innerHTML++;
                    pm_g[7].innerHTML++;
                }

                saT2_p[line_on_2 - 1].innerHTML++;
                gaT2_p[line_on_2 - 1].innerHTML++;
                pmT2_p[line_on_2 - 1].innerHTML--;
                if (line_on_2 < 4) {
                    saT2_p[7].innerHTML++;
                    gaT2_p[7].innerHTML++;
                    pmT2_p[7].innerHTML--;
                }

                saT2_g[line_on_2 - 1].innerHTML++;
                gaT2_g[line_on_2 - 1].innerHTML++;
                pmT2_g[line_on_2 - 1].innerHTML--;
                if (line_on_2 < 4) {
                    saT2_g[7].innerHTML++;
                    gaT2_g[7].innerHTML++;
                    pmT2_g[7].innerHTML--;
                }

                tgt_1.innerHTML++;
                tgtp_1.innerHTML++;
            }
        }
        else if (Ball_pos == 2) {
            ctx.fillStyle = "red";
            dataShot = 2;

            if (type == 1) {    // Shot Missed
                ctx.fillText("M", x, y);
                dataRes = 1;

                sa_p[line_on - 1].innerHTML++;
                sa_g[line_on - 1].innerHTML++;
                ma_p[line_on - 1].innerHTML++;
                ma_g[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    sa_g[7].innerHTML++;
                    sa_p[7].innerHTML++;
                    ma_p[7].innerHTML++;
                    ma_g[7].innerHTML++;
                }

                sfT2_p[line_on_2 - 1].innerHTML++;
                sfT2_g[line_on_2 - 1].innerHTML++;
                mfT2_p[line_on_2 - 1].innerHTML++;
                mfT2_g[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    sfT2_g[7].innerHTML++;
                    sfT2_p[7].innerHTML++;
                    mfT2_p[7].innerHTML++;
                    mfT2_g[7].innerHTML++;
                }
            }
            else if (type == 3) {   // Shot Blocked
                ctx.fillText("B", x, y);
                dataRes = 3;

                sa_p[line_on - 1].innerHTML++;
                bf_p[line_on - 1].innerHTML++;
                sa_g[line_on - 1].innerHTML++;
                bf_g[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    sa_g[7].innerHTML++;
                    bf_g[7].innerHTML++;
                    sa_p[7].innerHTML++;
                    bf_p[7].innerHTML++;
                }

                sfT2_p[line_on_2 - 1].innerHTML++;
                baT2_p[line_on_2 - 1].innerHTML++;
                sfT2_g[line_on_2 - 1].innerHTML++;
                baT2_g[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    sfT2_g[7].innerHTML++;
                    baT2_g[7].innerHTML++;
                    sfT2_p[7].innerHTML++;
                    baT2_p[7].innerHTML++;
                }
            }
            else if (type == 2) {   // Shot Saved
                ctx.fillText("S", x, y);
                dataRes = 2;

                sa_p[line_on - 1].innerHTML++;
                sa_g[line_on - 1].innerHTML++;
                saa_p[line_on - 1].innerHTML++;
                saa_g[line_on - 1].innerHTML++;
                if (line_on < 4) {
                    sa_p[7].innerHTML++;
                    sa_g[7].innerHTML++;
                    saa_p[7].innerHTML++;
                    saa_g[7].innerHTML++;
                }

                sfT2_p[line_on_2 - 1].innerHTML++;
                sfT2_g[line_on_2 - 1].innerHTML++;
                safT2_p[line_on_2 - 1].innerHTML++;
                safT2_g[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    sfT2_p[7].innerHTML++;
                    sfT2_g[7].innerHTML++;
                    safT2_p[7].innerHTML++;
                    safT2_g[7].innerHTML++;
                }
            }
            else if (type == 4) {   // Shot Goal
                ctx.fillText("G", x, y);
                dataRes = 4;

                sa_p[line_on - 1].innerHTML++;
                ga_p[line_on - 1].innerHTML++;
                pm_p[line_on - 1].innerHTML--;
                if (line_on < 4) {
                    sa_p[7].innerHTML++;
                    ga_p[7].innerHTML++;
                    pm_p[7].innerHTML--;
                }

                sa_g[line_on - 1].innerHTML++;
                ga_g[line_on - 1].innerHTML++;
                pm_g[line_on - 1].innerHTML--;
                if (line_on < 4) {
                    sa_g[7].innerHTML++;
                    ga_g[7].innerHTML++;
                    pm_g[7].innerHTML--;
                }

                sfT2_p[line_on_2 - 1].innerHTML++;
                gfT2_p[line_on_2 - 1].innerHTML++;
                pmT2_p[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    sfT2_p[7].innerHTML++;
                    gfT2_p[7].innerHTML++;
                    pmT2_p[7].innerHTML++;
                }

                sfT2_g[line_on_2 - 1].innerHTML++;
                gfT2_g[line_on_2 - 1].innerHTML++;
                pmT2_g[line_on_2 - 1].innerHTML++;
                if (line_on_2 < 4) {
                    sfT2_g[7].innerHTML++;
                    gfT2_g[7].innerHTML++;
                    pmT2_g[7].innerHTML++;
                }

                tgt_2.innerHTML++;
                tgtp_2.innerHTML++;
            }
        }

        // Shot Angle and Distance calculation
        // Goal place(s) y=50/450, x=150 (x = 10%/90% of length, y=50% of width)
        // Field dimensions = 20m x 40m (fWidth x fLength)
        // Shot Angle in respect to reference line (line from the center of the goal line to the
        // left goal post from the goalie's perspective)

        var b = (150 - x) * 20 / fWidth;

        if (Ball_pos == 1) {
            if (Order == 1) {
                var a = (50 - y) * 40 / fLength;
                dataDis = Math.sqrt( a*a + b*b );

                var dAy = 50 - 50; // Reference line
                var dAx = 300 - 150;
                var dBy = y - 50; // Line from the shot position to the center of the goal line
                var dBx = x - 150;

                var angle = Math.atan2(dAx * dBy - dAy * dBx, dAx * dBx + dAy * dBy);
                if (angle < 0) {angle = angle * -1;}
                dataAngle = angle * (180 / Math.PI);

            }
        }
        if (Ball_pos == 1) {
            if (Order == 2) {
                var a = (450 - y) * 40 / fLength;
                dataDis = Math.sqrt( a*a + b*b );

                var dAy = 450 - 450; // Reference line
                var dAx = 0 - 150;
                var dBy = y - 450; // Line from the shot position to the center of the goal line
                var dBx = x - 150;

                var angle = Math.atan2(dAx * dBy - dAy * dBx, dAx * dBx + dAy * dBy);
                if (angle < 0) {angle = angle * -1;}
                dataAngle = angle * (180 / Math.PI);
            }
        }
        if (Ball_pos == 2) {
            if (Order == 1) {
                var a = (450 - y) * 40 / fLength;
                dataDis = Math.sqrt( a*a + b*b );

                var dAy = 450 - 450; // Reference line
                var dAx = 0 - 150;
                var dBy = y - 450; // Line from the shot position to the center of the goal line
                var dBx = x - 150;

                var angle = Math.atan2(dAx * dBy - dAy * dBx, dAx * dBx + dAy * dBy);
                if (angle < 0) {angle = angle * -1;}
                dataAngle = angle * (180 / Math.PI);
            }
        }
        if (Ball_pos == 2) {
            if (Order == 2) {
                var a = (50 - y) * 40 / fLength;
                dataDis = Math.sqrt( a*a + b*b );

                var dAy = 50 - 50; // Reference line
                var dAx = 300 - 150;
                var dBy = y - 50; // Line from the shot position to the center of the goal line
                var dBx = x - 150;

                var angle = Math.atan2(dAx * dBy - dAy * dBx, dAx * dBx + dAy * dBy);
                if (angle < 0) {angle = angle * -1;}
                dataAngle = angle * (180 / Math.PI);
            }
        }
        if (Ball_pos == 1) {
            if (line_on < 4) {
                dataPp = 0;
                dataSh = 0;
            }
            if (line_on == 4 || line_on == 5) {
                dataPp = 1;
            }
            if (line_on == 6 || line_on == 7) {
                dataSh = 1;
            }
        }
        if (Ball_pos == 2) {
            if (line_on_2 < 4) {
                dataPp = 0;
                dataSh = 0;
            }
            if (line_on_2 == 4 || line_on_2 == 5) {
                dataPp = 1;
            }
            if (line_on_2 == 6 || line_on_2 == 7) {
                dataSh = 1;
            }
        }

        // Shot menu

        menu.style.display = "none";
        shotData.push([gameCounter, Ball_pos, dataRes, dataType, dataDis, dataAngle, dataPp, dataSh]);
    }

    function shotTurnover() {
        dataType = 1;
        stype.style.display = "none";
        menu.style.display = "block";
        menu.style.left = stype.style.left;
        menu.style.top = stype.style.top;
        // shotData.push([gameCounter, Ball_pos, dataRes, dataType, dataDis, dataAngle, dataPp, dataSh]);
        // console.log(shotData);
    }

    function shotOnetimer() {
        dataType = 2;
        stype.style.display = "none";
        menu.style.display = "block";
        menu.style.left = stype.style.left;
        menu.style.top = stype.style.top;
        // shotData.push([gameCounter, Ball_pos, dataRes, dataType, dataDis, dataAngle, dataPp, dataSh]);
        // console.log(shotData);
    }

    function shotRebound() {
        dataType = 3;
        stype.style.display = "none";
        menu.style.display = "block";
        menu.style.left = stype.style.left;
        menu.style.top = stype.style.top;
        // shotData.push([gameCounter, Ball_pos, dataRes, dataType, dataDis, dataAngle, dataPp, dataSh]);
        // console.log(shotData);
    }

    function shotDirect() {
        dataType = 4;
        stype.style.display = "none";
        menu.style.display = "block";
        menu.style.left = stype.style.left;
        menu.style.top = stype.style.top;
        // shotData.push([gameCounter, Ball_pos, dataRes, dataType, dataDis, dataAngle, dataPp, dataSh]);
        // console.log(shotData);
    }

    function sendData() {

        var r = confirm("Are you sure you want to send data,\n do this when your game is over?");
        if (r == true) {
            let today = new Date().toLocaleDateString()

            Email.send({
                SecureToken : "3b145e7d-a832-4993-b00e-15a5d25b5b98",
                To : 'floorballscanner@gmail.com',
                From : "floorballscanner@gmail.com",
                Subject : "Game Data",
                Body : "<html><h2>"+ today +": "+ hTeam.value +" - "+ aTeam.value +"</h2><p>"+ shotData +"</p></br><p>"+ timeData +"</html>",
                }).then(
                    message => alert(message)
            );
        }

        console.log("sendData pressed");
    }

    function drawChart() {

        // Team xG Chart
        var data = google.visualization.arrayToDataTable(xGTeam_array);

        var options = {
          title: 'xG by Team',
          curveType: 'function',
          legend: { position: 'bottom' },
          seriesType: 'lines',
          series: {
              2:{type: 'bars', color: 'blue'},
              3:{type: 'bars', color: 'red'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('xGTeam_chart'));
        chart.draw(data, options);

        // Line 1 xG Chart
        var data = google.visualization.arrayToDataTable(xGL1_array);

        var options = {
          title: 'xG by Line 1',
          curveType: 'function',
          legend: { position: 'bottom' },
          seriesType: 'lines',
          series: {
              2:{type: 'bars', color: 'blue'},
              3:{type: 'bars', color: 'red'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('xGL1_chart'));
        chart.draw(data, options);

        // Line 2 xG Chart
        var data = google.visualization.arrayToDataTable(xGL2_array);

        var options = {
          title: 'xG by Line 2',
          curveType: 'function',
          legend: { position: 'bottom' },
          seriesType: 'lines',
          series: {
              2:{type: 'bars', color: 'blue'},
              3:{type: 'bars', color: 'red'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('xGL2_chart'));
        chart.draw(data, options);

        // Line 3 xG Chart
        var data = google.visualization.arrayToDataTable(xGL3_array);

        var options = {
          title: 'xG by Line 3',
          curveType: 'function',
          legend: { position: 'bottom' },
          seriesType: 'lines',
          series: {
              2:{type: 'bars', color: 'blue'},
              3:{type: 'bars', color: 'red'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('xGL3_chart'));
        chart.draw(data, options);

        // Position Chart
        var data = google.visualization.arrayToDataTable(posTeam_array);

        var options = {
          title: 'Possession by Line',
          curveType: 'function',
          legend: { position: 'bottom' },
          seriesType: 'bars',
          series: {
              0:{color: 'blue'},
              1:{color: 'purple'},
              2:{color: 'yellow'},
              3:{color: 'green'},
              4:{color: 'red'},
              5:{type: 'line', color: 'black'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('posTeam_chart'));
        chart.draw(data, options);

    }

    function set_t1_names() {

        console.log(name_t1);
        for (let i = 0; i < 19; i++) {
        console.log(i);
            name_t1_id[i].innerHTML = name_t1;
        }
    }

    function set_t2_names() {

        for (let i = 0; i < 19; i++) {
            name_t2_id[i].innerHTML = name_t2;
        }
    }
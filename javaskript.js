function utisakOAutorima() {
    if(document.getElementById('autor1').checked) {
        let utisak = document.getElementById('utisak-tekst').value
        if (utisak === '') {
            alert("Unesite utisak pre potvrde")
        }else{
            alert("Hvala što ste da li utisak za Nevenu! Utisak koji ste dali je: " + utisak)
        }
        
    }else if(document.getElementById('autor2').checked) {
        let utisak = document.getElementById('utisak-tekst').value
        if (utisak === ''){
            alert("Unesite utisak pre potvrde")
        } else {
            alert("Hvala što ste da li utisak za Luku! Utisak koji ste dali je: " + utisak)
        }
    }else{
        alert("Selektujte jednog autora")
    }
}

function utisakORestoranu() {
    let utisak = document.getElementById("utisak-o-restoranu").value;

    if (utisak != "") {
        alert("Hvala što ste ostavili utisak")
    } else {
        alert("Molimo Vas da unesete utisak pre potvrde")
    }
}

function rezervacija() {
    let datum = document.getElementById("datum").value;
    let vreme = document.getElementById("vreme").value;
    let brosoba = document.getElementById("brosoba").value;

    if (!datum) {
        alert("Molimo Vas da unesete datum pre potvrde")
        return;
    }

    if(new Date(datum) < new Date()) {
        alert("Molimo unesite datum u budućnosti")
        return;
    }

    if (!vreme) {
        alert("Molimo Vas da unesete vreme pre potvrde")
        return;
    } 

    if (!brosoba) {
        alert("Molimo Vas da unesete broj osoba pre potvrde")
        return;
    }

    alert("Uspešno ste rezervisali svoje mesto!")
    document.getElementById("datum").value = ""
    document.getElementById("vreme").value = ""
    document.getElementById("brosoba").value = ""
}

function proveri() {
    document.getElementById("prvo-tacno").style.display = 'none'
    document.getElementById("prvo-netacno").style.display = 'none'
    document.getElementById("drugo-tacno").style.display = 'none'
    document.getElementById("drugo-netacno").style.display = 'none'
    document.getElementById("trece-tacno").style.display = 'none'
    document.getElementById("trece-netacno").style.display = 'none'
    document.getElementById("cetvrto-tacno").style.display = 'none'
    document.getElementById("cetvrto-netacno").style.display = 'none'

    let prviOdgovorTacan = document.getElementById("2002").checked;
    if (prviOdgovorTacan === true) {
        let slikaTacno = document.getElementById("prvo-tacno")
        slikaTacno.style.display = 'block'
    } else {    
        let slikaNetacno = document.getElementById("prvo-netacno")
        slikaNetacno.style.display = 'block'
    }
    let drugiOdgovorTacan = document.getElementById("som").checked;
    if (drugiOdgovorTacan === true) {
        let slikaTacno = document.getElementById("drugo-tacno")
        slikaTacno.style.display = 'block'
    } else {    
        let slikaNetacno = document.getElementById("drugo-netacno")
        slikaNetacno.style.display = 'block'
    }
    let treciOdgovorTacan = document.getElementById("vg").checked;
    if (treciOdgovorTacan === true) {
        let slikaTacno = document.getElementById("trece-tacno")
        slikaTacno.style.display = 'block'
    } else {    
        let slikaNetacno = document.getElementById("trece-netacno")
        slikaNetacno.style.display = 'block'
    }
    let cetvrtiOdgovorTacan = document.getElementById("ribarostilj").checked;
    if (cetvrtiOdgovorTacan === true) {
        let slikaTacno = document.getElementById("cetvrto-tacno")
        slikaTacno.style.display = 'block'
    } else {    
        let slikaNetacno = document.getElementById("cetvrto-netacno")
        slikaNetacno.style.display = 'block'
    }
    let petiOdgovorTacan = document.getElementById("vino").checked;
    if (petiOdgovorTacan === true) {
        let slikaTacno = document.getElementById("peto-tacno")
        slikaTacno.style.display = 'block'
    } else {    
        let slikaNetacno = document.getElementById("peto-netacno")
        slikaNetacno.style.display = 'block'
    }
    

    if (prviOdgovorTacan === true && drugiOdgovorTacan === true && treciOdgovorTacan === true && cetvrtiOdgovorTacan === true && petiOdgovorTacan === true) {
        let kodKupona = Date.now()
        alert("Čestitamo! Osvojili ste nagradni kupon! Broj kupona je " + kodKupona + ". Vrednost kupona iznosti 1000 dinara.")
        location.href = "Glavna stranica.html"
    } else {
        alert("Žao nam je, ali niste dali tačan odgovor na sva pitanja. Pokušajte ponovo!")
    }
}

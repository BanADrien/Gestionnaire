//importer mes element fixe
let categorie = document.getElementById('categorie');
let slide = document.getElementById('slide');
let ajouter = document.getElementById('ajouter');
let espace = document.getElementById('espace');
//crée une variable de verification
verifcategorie = true
prems = true

//crée un evenement pour ajouter une categorie
ajouter.addEventListener('click', () => {

    if (verifcategorie) {
       
        //crée un div pour recadrer les elements
        let recadre = document.createElement('div');
        recadre.classList.add('centrercolonne');
        recadre.setAttribute('id', 'encadre');

        //crée un div pour aligner des elements
        let aligne = document.createElement('div');
        aligne.classList.add('aligne');

        //mettre les element au bon endroit
        recadre.appendChild(aligne);
        categorie.appendChild(recadre);

        //crée un input pour entrer le nom de la categorie
        let inputcategorie = document.createElement('input');
        inputcategorie.setAttribute('type', 'text');
        inputcategorie.setAttribute('placeholder', 'Entrer nom');
        
        //crée un bouton pour valider
        let valider = document.createElement('button');
        valider.classList.add('valider')
        valider.textContent = 'Valider';
   


        //crée un bouton pour annuler
        let annuler = document.createElement('button');
        annuler.classList.add('annuler');
        annuler.textContent = '✖';

        //mettre les elements au bon endroit
        aligne.appendChild(valider);
        aligne.appendChild(annuler);
        recadre.appendChild(inputcategorie);

        //mettre la verification a false

        verifcategorie = false
        
        valider.addEventListener('click', () => {
            if (inputcategorie.value == '' || inputcategorie.value == ' ' || inputcategorie.value.length > 10) {
                alert('Veuillez entrer un nom entre 1 et 10 caractères');
                return
            } else {
                espace.classList.remove('espacevide')
                espace.classList.add('espace')
                //crée un bouton pour la categorie
                let newcategorie = document.createElement('button');
                newcategorie.textContent = inputcategorie.value;
                slide.appendChild(newcategorie);

                //création d'une page de catégorie
                let site = document.createElement('div');
                site.classList.add('site');
                espace.appendChild(site);
                if (prems) {
                    site.style.display = 'block';
                    prems = false
                } else {
                    site.style.display = 'none';
                }
                //supprimer une categorie
                let boitesuppr = document.createElement('div');
                boitesuppr.classList.add('boitesuppr');
                site.appendChild(boitesuppr);
                let supprcategorie = document.createElement('button');
                supprcategorie.textContent = '✖';
                supprcategorie.classList.add('suppr');
                boitesuppr.appendChild(supprcategorie);

                //boite ou seront ranger les sites
                let boitesite = document.createElement('div');
                boitesite.classList.add('boitesite');
                site.appendChild(boitesite);
                boitesite.style.display = 'none';

                //bouton pour ajouter les sites
                let boiteaddsite = document.createElement('div');
                boiteaddsite.classList.add('boiteaddsite');
                site.appendChild(boiteaddsite);

                let addlien = document.createElement('button');
                addlien.textContent = 'Ajouter un site';
                boiteaddsite.appendChild(addlien);

                suppr()

                //bouton pour supprimer une categorie
                supprcategorie.addEventListener('click', () => {
                    //valider la suppresion
                    if (confirm('Voulez-vous vraiment supprimer cette catégorie ?')) {
                        newcategorie.remove();
                        site.remove();
                    }
                })
                //bouton qui permet d'ajouter un site
                let verifsite = true
                addlien.addEventListener('click', () => {
                    if (verifsite) {
                        addlien.style.display = 'none';
                        boitesite.style.display = 'block';
                        let creation = document.createElement('div');
                        creation.classList.add('creation');
                        let inputlien = document.createElement('input');
                        let inputnom = document.createElement('input');
                        let inputimg = document.createElement('input');
                        let labelimg = document.createElement('label');
                        labelimg.textContent = 'Choisir une image';
                        labelimg.setAttribute('for', 'inputimg');
                        labelimg.classList.add('labelimg');

                        let valider = document.createElement('button');
                        valider.textContent = 'Valider';
                        let annulersite = document.createElement('button');
                        annulersite.textContent = '✖';
                        annulersite.classList.add('annuler');
                        inputlien.setAttribute('type', 'text');
                        inputlien.setAttribute('placeholder', 'Lien');
                        inputnom.setAttribute('type', 'text');
                        inputnom.setAttribute('placeholder', 'Nom');

                        inputimg.setAttribute('type', 'file');
                        inputimg.setAttribute('accept', 'image/*')
                        inputimg.setAttribute('id', 'inputimg');
                        inputimg.classList.add('inputimg');
                        inputimg.addEventListener('change', function () {
                            let nomFichier = this.files[0].name;

                            labelimg.textContent = nomFichier;
                            
                        });

                        
                        creation.appendChild(inputnom);
                        creation.appendChild(inputlien);
                        creation.appendChild(inputimg);
                        creation.appendChild(labelimg);
                        creation.appendChild(valider);
                        creation.appendChild(annuler);
                        boitesite.appendChild(creation);
                        inputnom.focus()
                        site.scrollTop = site.scrollHeight;
                        annuler.addEventListener('click', () => {
                            creation.remove();
                            verifsite = true
                            addlien.style.display = 'block';
                        })
                        verifsite = false
                        
                        valider.addEventListener('click', () => {
                            if (inputlien.value == '' || inputnom.value == '' || inputimg.value == '') {
                                alert('Veuillez remplir tout les champs');
                                return
                            } else {
                                addlien.style.display = 'block';
                                let cage = document.createElement('div');
                                cage.classList.add('cage');
                                let supprlien = document.createElement('button');
                                supprlien.textContent = '✖';
                                supprlien.classList.add('annuler');

                                supprlien.addEventListener('click', () => {
                                    if (confirm('Voulez-vous vraiment supprimer ce site ?')) {
                                        cage.remove();
                                    }
                                })
                                let liensite = document.createElement('a');
                                liensite.setAttribute('href', inputlien.value);
                                liensite.setAttribute('target', '_blank');
                                let card = document.createElement('div');
                                card.classList.add('card');
                                let imgbox = document.createElement('div');
                                imgbox.classList.add('imgbox');
                                let img = document.createElement('img');
                                img.setAttribute('src', URL.createObjectURL(inputimg.files[0]));
                                let content = document.createElement('div');
                                content.classList.add('content');
                                let h2 = document.createElement('h2');
                                h2.textContent = inputnom.value;
                                liensite.appendChild(card);
                                card.appendChild(imgbox);
                                imgbox.appendChild(img);
                                card.appendChild(content);
                                content.appendChild(h2);
                                creation.remove();

                                cage.appendChild(liensite)
                                cage.appendChild(supprlien);

                                boitesite.appendChild(cage);



                                verifsite = true
                            }
                        })

                    } else {
                        return
                    }
                })
                //effet de changement de page
                newcategorie.addEventListener('click', () => {
                    if (site.style.display == 'none') {
                        let sites = document.querySelectorAll('.site');
                        setTimeout(() => {
                            sites.forEach(site => {
                                site.style.display = 'none';
                            });
                        }, 100);
                        setTimeout(() => {
                            site.style.display = 'block';
                        }, 150);
                    }
                })


            }
        })
        inputcategorie.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
              valider.click();
            }
          });
          inputcategorie.focus()
        //annuler la creation d'une categorie
        annuler.addEventListener('click', () => {
            suppr()
        })
    }
})
//fonction pour supprimer la creation d'une categorie
function suppr() {
    let encadre = document.getElementById('encadre')
    encadre.remove();
    verifcategorie = true
}





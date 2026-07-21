*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f8f8f8;
    color:#333;
    line-height:1.6;
}

.navbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 10%;
    background:#0b3d2e;
    position:sticky;
    top:0;
    z-index:1000;
}

.logo h2{
    color:white;
}

.nav-links{
    list-style:none;
    display:flex;
    gap:25px;
}

.nav-links a{
    color:white;
    text-decoration:none;
    font-weight:bold;
}

.nav-links a:hover{
    color:#ffd54f;
}

.hero{
    height:90vh;
    background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),
    url("https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80");
    background-size:cover;
    background-position:center;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:white;
    padding:20px;
}

.hero h1{
    font-size:3rem;
    margin-bottom:20px;
}

.hero p{
    max-width:700px;
    margin:auto;
    margin-bottom:30px;
    font-size:1.2rem;
}

.btn{
    display:inline-block;
    padding:14px 30px;
    background:#f4b400;
    color:#222;
    text-decoration:none;
    border-radius:30px;
    font-weight:bold;
    transition:.3s;
}

.btn:hover{
    background:#d89b00;
    transform:translateY(-2px);
}

section{
    padding:70px 10%;
}

section h2{
    text-align:center;
    margin-bottom:40px;
    color:#0b3d2e;
    font-size:2rem;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.card{
    background:white;
    border-radius:12px;
    padding:25px;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
    transition:.3s;
}

.card:hover{
    transform:translateY(-8px);
}

.card h3{
    color:#0b3d2e;
    margin-bottom:15px;
}

#about{
    text-align:center;
}

#about p{
    max-width:800px;
    margin:auto;
    font-size:1.1rem;
}

#contact{
    background:#0b3d2e;
    color:white;
    text-align:center;
}

#contact h2{
    color:white;
}

#contact p{
    margin:12px 0;
}

footer{
    background:#06251c;
    color:white;
    text-align:center;
    padding:20px;
}

@media(max-width:768px){

.navbar{
    flex-direction:column;
}

.nav-links{
    flex-direction:column;
    margin-top:15px;
    text-align:center;
}

.hero h1{
    font-size:2.2rem;
}

.hero p{
    font-size:1rem;
}

}

<template>

<div class="footer" >
<!------------------- social links  ---------------------->
        <div class="social-media-links">
            Get connected on 
            <a  v-for="(social, i) in socials" :key="i" :href="social.href" target="_blanck" >
                <i :class="social.icon"></i>
            </a>
        </div>
    <div class="date">
        <div class="text"> 
            <li>
                {{ new Date().getFullYear() }} — <strong>Oumoussa</strong>
            </li>
            <li>
                Open sourced on
                <a target="_blanck" href="https://github.com/oumoussa98/gridsome-personal-website">
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li>
                Deployed on 
                <a target="_blanck" href="https://www.netlify.com/">
                    <g-image alt="netlify icon" src="~/assets/images/netlify.svg" width="20"/>
                </a> 
            </li>
        </div>
    </div>  

</div>
  
</template>

<script defer>
export default {
// Data ---------------------------------------------------------------------------
    data: () => ({
    // Social media links----------------------------------------------
      socials: [
        {icon:'fab fa-twitter',href:'http://www.twitter.com/oumoussa98/'},
        {icon:'fab fa-facebook',href:'http://www.facebook.com/oumoussa98/'},
        {icon:'fab fa-instagram',href:'http://www.instagram.com/oumoussa98/'},
        {icon:'fab fa-github',href:'http://www.github.com/oumoussa98/'},
      ]
    }),
}
</script>

<style scoped>
.footer {
    width: 100%;
    display: block;
    align-items: center;
    justify-items: center;
}
.social-media-links {
    width: 100% ;
    min-height: 50px ;
    background-color: var(--color) ;
    color: var(--bg) ;
    text-align: center;
    transition: background-color 0.5s ease-in-out;
}

.social-media-links a i {
    margin: 15px 10px;
    color: var(--bg);
}

.date {
    width: 100%;
    min-height: 40px ;
    text-align: center;
    background-color: rgb(9, 172, 118);
    transition: background-color 0.5s ease-in-out;
}

.date .text li {
    margin: 10px 0 0 10px;
    list-style: none;
    display: inline-block;
}
a { color: #34495e; }
</style>
<template>
<layout>
<div class="container contact">
  <form action="#">
    <label for="name"></label>
    <input type="name" id="name" name="name" placeholder="Your name..">

    <label for="email"></label>
    <input type="email" id="email" name="email" placeholder="Your email..">


    <label for="message"></label>
    <span class="textarea" role="textbox" id="message" name="message" contenteditable>
        
    </span>

    <input type="submit" value="Send meassage">
    <!-- <input type="reset" value="Reset form"> -->
  </form>
  <div>
    <p class="display-3">
      Or you can text me on
    </p>
    <div>
        <ul>
            <!-- <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p>marrakech, MA 94126, morocco</p>
            </li> -->
            <li><i class="fas fa-phone fa-2x"></i>
                <p>+212 642823650</p>
            </li>

            <li><i class="fas fa-envelope fa-2x"></i>
                <p>abdelwahd.oumouss@gmail.com</p>
            </li>
        </ul>
    </div>
  </div>
</div>
</layout>

</template>

<script>
  export default {
      metaInfo: {
    title: 'Contact'
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}
input[type=name],[type=email] {
  width: 100%;
  padding: 15px;
  border: none;
  border-bottom: 1px solid grey;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  outline: none;
  background-color: var(--bg);
  color: var(--color);

}
.textarea {
  display: block;
  width: 100%;
  overflow: hidden;
  resize: both;
  min-height: 40px;
  line-height: 20px;
  border: none;
  border-bottom: 1px solid grey;
  padding: 15px;
  margin: 15px 0;
  outline: none;

}
.textarea[contenteditable]:empty::before {
  content: "your message";
  color: var(--color);
}

::placeholder { color: var(--color); }
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
}
/* input[type=reset] {
  background-color: #f38b15;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 15px;
  outline: none;
} */
input[type=submit]:hover, input[type=reset]:hover {
  box-shadow: 0px 2px 4px var(--color);
}
 .display-3 {
    text-align: center;
 }
li {
     display: inline-block;
     margin: 0 20px;
     text-align: center;
 }
 ul {
   text-align: center;
 }



</style>
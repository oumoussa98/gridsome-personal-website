<template>
  <Layout>
    <div class="container-fluid about">
      <div class="col-md-6">
        <h1>Get some info about me</h1>
        <p>
          my name is abdelouahed oumoussa from morocco, born on a small
          town near to marrakech city, this town called ourika it's really
          wonderful place you should visit it someday.
          i start learning web development since i was 21, from home with
          my computer it was something very exiting to me to build
          something beautiful and playing around with it, i'm always enjoy it.
        </p>
        <h2>Status</h2>
        <p>
          <span>Currently:</span> I'm working on this website
          <br />
          <span>Next Project:</span> I'm going to try to build an e-commerce website just for the sake of practice and learn more
        </p>
      </div>
      <div class="col-md-6 image-div">
        <g-image class="image" src="/uploads/myimg.png" alt="My photo" />
        <div class="text">This image will be replaced</div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About"
  }
};
</script>

<style scoped>
.about {
  min-height: 600px;
  font-size: 20px;
}
.image-div .image {
  width: 100%;
  height: 90vh;
  margin: 40px 0;
  border-radius: 6px;
}
.image-div .text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
}
p span {
  font-weight: 600;
  letter-spacing: 1px;
}
</style>

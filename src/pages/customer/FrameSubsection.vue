<template>
  <div class="frame-subsection">
    <div class="frame-19">
      <div class="div-2">
        <NavList
          class="nav-list-instance"
          divClassName="design-component-instance-node"
          :icon="ChartComponent"
          text="Dashboard"
          :visible="false"
        />
        <div class="nav-list-2">
          <div class="icon-text">
            <User class="icon-instance-node" color="#7C8DB5" />
            <div class="text-wrapper-17">Customer</div>
          </div>
        </div>
      </div>

      <div class="div-2">
        <NavList
          class="nav-list-instance"
          divClassName="nav-list-3"
          :icon="ChatComponent"
          text="Contact"
          :visible="false"
        />
      </div>
    </div>

    <img class="divider" alt="Divider" :src="divider" />
  </div>
</template>

<script>
import NavList from './NavList.vue';
import Chart from './Chart.vue';
import Chat from './Chat.vue';
import User from './User.vue';
import divider from './divider.svg';

export default {
  name: 'FrameSubsection',
  components: {
    NavList,
    ChartComponent: Chart,
    ChatComponent: Chat,
    User,
  },
  data() {
    return {
      divider,
    };
  },
};
</script>

<style>
.frame-subsection {
  /* Add your styles here */
}

.frame-19 {
  /* Add your styles here */
}

.div-2 {
  /* Add your styles here */
}

.nav-list-2 {
  /* Add your styles here */
}

.icon-text {
  /* Add your styles here */
}

.text-wrapper-17 {
  /* Add your styles here */
}

.divider {
  /* Add your styles here */
}
</style>
<template>
  <div class="frame-subsection">
    <div class="frame">
      <div class="div">
        <NavList
          class="nav-list-instance"
          divClassName="design-component-instance-node"
          :icon="chartIcon"
          text="Dashboard"
          :visible="false"
        />
        <div class="nav-list-2">
          <div class="icon-text">
            <User class="icon-instance-node" color="#7C8DB5" />
            <div class="text-wrapper">Customer</div>
          </div>
        </div>
      </div>

      <div class="div">
        <NavList
          class="nav-list-instance"
          divClassName="nav-list-3"
          :icon="chatIcon"
          text="Contact"
          :visible="false"
        />
      </div>
    </div>

    <img class="divider" alt="Divider" :src="dividerImage" />
  </div>
</template>

<script>
import NavList from './NavList';
import Chart from './Chart';
import Chat from './Chat';
import User from './User';
import divider4 from './divider-4.svg';

export default {
  name: 'FrameSubsection',
  components: {
    NavList,
    Chart,
    Chat,
    User
  },
  data() {
    return {
      dividerImage: divider4,
    };
  },
  computed: {
    chartIcon() {
      return <Chart chart="chart-2.svg" class="chart-instance" />;
    },
    chatIcon() {
      return <Chat class="icon-instance-node" color="#7C8DB5" />;
    }
  }
};
</script>

<style>
.frame-subsection {
  /* Add your styles here */
}

.frame {
  /* Add your styles here */
}

.div {
  /* Add your styles here */
}

.nav-list-instance {
  /* Add your styles here */
}

.nav-list-2 {
  /* Add your styles here */
}

.icon-text {
  /* Add your styles here */
}

.icon-instance-node {
  /* Add your styles here */
}

.text-wrapper {
  /* Add your styles here */
}

.divider {
  /* Add your styles here */
}
</style>
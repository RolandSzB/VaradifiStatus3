<script setup>
import Header from "../components/Header.vue";
import Home from "../components/Home.vue";
import Events from "../components/Events.vue";
import EventCalendar from "../components/EventCalendar.vue";
import Shirts from "../components/Shirts.vue";
import Groups from "../components/Groups.vue";
import Content from "../components/Content.vue";
import InstaFeed from "../components/InstaFeed.vue";
import About from "../components/About.vue";
import CopyrightPage from "../components/CopyrightPage.vue";
import { useEventsStore } from "../stores/events";
import { usePostsStore } from "../stores/posts";

import { onMounted } from "vue";
import axios from "axios";

onMounted(async () => {
  const events = await axios.get("http://localhost:3000/events");
  console.log(events.data);

  eventStore.events = events.data;
});
const eventStore = useEventsStore();
const postStore = usePostsStore();
</script>

<template>
  <Header></Header>
  <Home id="home"></Home>
  <Events id="events"></Events>
  <EventCalendar
    v-for="event in eventStore.events"
    :details="event"
    id="event-calendar"
  ></EventCalendar>
  <Shirts id="shirts"></Shirts>
  <Groups id="groups"></Groups>
  <Content id="content"></Content>
  <div class="flex flex-col xl:flex-row bg-amber-100 xl:px-4 justify-center h-196">
    <InstaFeed v-for="post in postStore.posts" :details="post"></InstaFeed>
  </div>
  <About id="aboutUsPage"></About>
  <CopyrightPage id="copyright"></CopyrightPage>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

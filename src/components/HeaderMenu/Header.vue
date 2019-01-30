<template>
  <div>
    <!-- Header -->
    <header class="header fixed-top loaded">
      <Navbar />
      <!-- Sidebar -->
      <nav id="sidebar">
        <ExitButton />
        <SignOption />
        <CategoryMenuList />
        <BasicMenuList />
        <SnsList />
      </nav>
      <!-- Sidebar -->
    </header>
    <div class="overlay"></div>
  </div>
</template>

<script>
import Navbar from "@/components/HeaderMenu/Navbar";
import ExitButton from "@/components/HeaderMenu/ExitButton";
import SignOption from "@/components/HeaderMenu/SignOption";
import BasicMenuList from "@/components/HeaderMenu/BasicMenuList";
import SnsList from "@/components/HeaderMenu/SnsList";
import CategoryMenuList from "@/components/HeaderMenu/CategoryMenuList";

export default {
  name: "Header",
  components: {
    CategoryMenuList,
    SnsList,
    BasicMenuList,
    SignOption,
    ExitButton,
    Navbar
  }
};
</script>

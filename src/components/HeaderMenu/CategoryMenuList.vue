<template>
  <div class="container-fluid sidebar_cate">
    <div class="row">
      <CategoryItem icon_name="hot@3x.png" name="HOT" link="/side_cate/7" />
      <CategoryItem icon_name="new@3x.png" name="NEW" link="/side_cate/8" />
      <CategoryItem
        icon_name="woman@3x.png"
        name="인권/성평등"
        link="/side_cate/1"
      />
      <CategoryItem icon_name="dog@3x.png" name="동물" link="/side_cate/2" />
      <CategoryItem
        icon_name="book@3x.png"
        name="육아/교육"
        link="/side_cate/3"
      />
      <CategoryItem
        icon_name="environment@3x.png"
        name="안전/환경"
        link="/side_cate/4"
      />
      <CategoryItem
        icon_name="health@3x.png"
        name="보건/복지"
        link="/side_cate/5"
      />
      <CategoryItem
        icon_name="army@3x.png"
        name="통일/국방"
        link="/side_cate/6"
      />
    </div>
  </div>
</template>
<script>
import CategoryItem from "@/components/HeaderMenu/CategoryItem";

export default {
  name: "CategoryMenuList",
  components: { CategoryItem }
};
</script>

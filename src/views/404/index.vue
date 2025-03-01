<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-slate-50">
    <!-- 错误码 -->
    <h1 class="text-9xl font-bold text-slate-800">404</h1>

    <!-- 提示信息 -->
    <p class="mt-4 text-xl text-gray-700 sm:text-2xl">页面没有找到</p>

    <!-- 返回首页按钮 -->
    <router-link
      to="/"
      class="mt-8 px-6 py-2 bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 text-base/relaxed rounded-full transition-colors"
    >回到首页
    </router-link>
  </div>
</template>
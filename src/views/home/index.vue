<template>
  <div class="bg-slate-50 h-full min-h-svh w-full overflow-x-hidden">
    <div class="max-w-4xl m-auto h-full px-4">
      <div class="min-h-screen pb-10 relative flex flex-col">
        <div class="pt-16 md:pt-20 mb-12 ">
          <h2 class="text-center w-full text-slate-800">
            <h1 class="animate__animated animate__fadeInDown text-5xl font-bold text-center md:text-6xl/snug lg:text-7xl/snug serif-text text-black">零本智协</h1>
            <p style="--animate-delay:.4s" class="animate__animated animate__fadeInDown animate__delay-2s text-lg/relaxed md:text-xl/relaxed lg:text-2xl/relaxed text-slate-600 mt-4 md:mt-6 text-center serif-text">零本智协是赤峰二中2023级12班研究性学习团队近20开发的 AI 软件</p>
            <h5 style="--animate-delay:.4s" class="animate__animated animate__fadeInDown animate__delay-2s text-lg/relaxed md:text-xl/relaxed lg:text-2xl/relaxed text-slate-600 mt-2 max-w-[880px] mx-auto text-center serif-text mb-10 md:mb-16 lg:mb-20">依托领先的多模型深度思考 AI 技术驱动力量，构建全面创新的市场项目解决方案体系，致力于让<span class="primary-text">「零成本构建创新高效应用程序」</span>成为现实。</h5>
            <a  href="https://lingben.top" class="bg-black text-white rounded-full h-14 mx-auto max-w-52 text-center flex items-center justify-center text-lg font-semibold hover:text-gray-200 transition"><span >立即使用</span></a>
            <!-- <p class="animate__animated animate__fadeInDown text-2xl/relaxed md:text-3xl/relaxed lg:text-4xl/relaxed">这里是赤子英金</p>
            <p class="animate__animated animate__fadeInDown text-2xl/relaxed md:text-3xl/relaxed lg:text-4xl/relaxed animate__delay-2s" style="--animate-delay:.4s">欢迎与<span class="serif-text font-bold"> 零本智协 </span>对话</p> -->
          </h2>
        </div>
        <div class="animate__animated animate__fadeIn flex-1 animate__delay-2s max-w-3xl w-full mx-auto" style="--animate-delay:.5s">
          <form class="w-full flex rounded-3xl  px-5 py-5  border items-end bg-white border-slate-200 shadow-lg focus-within:shadow-xl focus-within:shadow-slate-200 transition-all focus-within:border-slate-300 shadow-slate-100 " action="https://lingben.top/" method="get">
            <textarea style="resize: none;" class="flex-1 text-base/6 min-h-20 w-full border-none outline-none font-normal " 
            autofocus placeholder="你好👋" type="text" name="q" maxlength="800"
            @keydown.enter="handleEnter"
            autocomplete="off"
            ></textarea>
            <button class="bg-slate-100 text-slate-500 hover:text-slate-600 px-2 py-2 rounded-3xl font-bold" type="submit">
              <svg width="18" height="18" viewBox="0 0 48 48" fill="none"><path d="M13 30L25 18L37 30" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="bevel"></path></svg>
            </button>
          </form>
        </div>
        <div class="mt-20 md:mt-32 lg:mt-40 xl:mt-48">
          <div class="flex justify-center">
            <div class="relative">
              <div class="flex justify-center">
                <div class="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg shadow-slate-200 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 md:mt-20 serif-text">
        <h3 class="text-center text-xl font-bold md:text-2xl text-slate-800">我们的项目</h3>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <a href="https://lingben.top/home" class="block rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 duration-500 transition-transform hover:scale-105">
            <h4 class="mb-2 text-lg md:text-xl lg:text-2xl text-slate-800 font-semibold">零本智协</h4>
            <p class="text-gray-500 text-base/relaxed">
              LinkBrain AI。依托领先的多模型深度思考 AI 技术驱动力量，构建全面创新的市场项目解决方案体系，致力于让「零成本构建创新高效应用程序」成为现实。
            </p>
          </a>
          <a href="https://oh.chiziingiin.top/project/Scheduler/" class="block rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 duration-500 transition-transform hover:scale-105">
            <h4 class="mb-2 text-lg md:text-xl lg:text-2xl text-slate-800 font-semibold">进程领航</h4>
            <p class="text-gray-500 text-base/relaxed">
              记录进度目标计数和专注的网页应用程序。我的目标是让用户享受方便快捷高效美观的日程效率软件体验。
            </p>
          </a>
        </div>

        <h3 class="text-center text-xl font-bold md:text-2xl text-slate-800 mt-12 md:mt-20">我们的理念</h3>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="rounded-2xl bg-white p-6 shadow-sm shadow-slate-200 duration-500 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105">
            <h4 class="mb-2 text-lg md:text-xl lg:text-2xl text-slate-800 font-semibold text-center">开放</h4>
          </div>
          <div class="rounded-2xl bg-white p-6 shadow-sm shadow-slate-200 duration-500 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105">
            <h4 class="mb-2 text-lg md:text-xl lg:text-2xl text-slate-800 font-semibold text-center">自由</h4>
          </div>
          <div class="rounded-2xl bg-white p-6 shadow-sm shadow-slate-200 duration-500 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105">
            <h4 class="mb-2 text-lg md:text-xl lg:text-2xl text-slate-800 font-semibold text-center">平等</h4>
          </div>
          <div class="rounded-2xl bg-white p-6 shadow-sm shadow-slate-200 duration-500 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105">
            <h4 class="mb-2 text-lg md:text-xl lg:text-2xl text-slate-800 font-semibold text-center">创新</h4>
          </div>
        </div>
      </div>
      <div class="mt-12 md:mt-20">
        <p class="text-center text-base/relaxed mb-2 text-slate-700">一个梦，诞生于美丽的英金河畔</p>
        <p class="text-center text-base/relaxed mb-2 text-slate-700"><router-link class="text-blue-500" to="/about">详细了解我们</router-link>，一个在读高中生团队</p>
      </div>
      <div class="pb-6 w-full mt-20">
        <div class="w-full text-sm text-slate-600 text-center">Chiziingiin © 2021–2025</div>
      </div>
    </div>
  </div>
</template>

<script setup>
function isMobile() {
  const userAgent = navigator.userAgent;
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(userAgent);
}
const mobile = isMobile();
const handleEnter = (event) => {
  if (event.shiftKey || mobile) {
    return;
  } else if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('form').submit();
  }
}
</script>

<style scoped>

.animate-bounce{
  animation: bounce 1.5s infinite !important;
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
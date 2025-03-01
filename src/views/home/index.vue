<template>
  <div class="bg-slate-50 h-full min-h-screen w-full overflow-x-hidden">
    <div class="max-w-3xl m-auto h-full px-4">
      <div class="pt-20 md:pt-32 lg:pt-40 xl:pt-48 mb-12 ">
        <h2 class="text-center w-full text-2xl/relaxed animate__animated md:text-3xl/relaxed text-slate-800 lg:text-4xl font-bold animate__fadeInDown">
          这里是赤子英金！<br class="md:hidden"/>
          欢迎和零本 AI 对话
        </h2>
      </div>
      <div class="animate__animated animate__fadeIn " style="--animate-delay:2s">
        <form class="w-full flex rounded-3xl border items-end bg-white border-slate-200 shadow-lg focus-within:shadow-xl focus-within:shadow-slate-200 transition-all focus-within:border-slate-300 shadow-slate-100 " action="https://lingben.top/" method="get">
          <textarea style="resize: none;" class="flex-1 min-h-28 w-full rounded-3xl border-none outline-none px-5 py-5 font-normal " autofocus placeholder="你好👋" type="text" name="q" maxlength="800"></textarea>
          <button class="bg-slate-100 mr-3 mb-3 text-slate-500 hover:text-slate-600 px-2 py-2 rounded-3xl font-bold" type="submit">
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
      <div class="mt-12 md:mt-20">
        <h3 class="text-center text-xl font-bold md:text-2xl text-slate-800">我们的项目</h3>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 duration-500 transition-transform hover:scale-105">
            <h4 class="mb-2 text-lg md:text-xl lg:text-2xl text-slate-800 font-semibold">零本智协</h4>
            <p class="text-gray-500 text-base/relaxed">
              LinkBrain AI。依托领先的多模型深度思考 AI 技术驱动力量，构建全面创新的市场项目解决方案体系，致力于让「零成本构建创新高效应用程序」成为现实。
            </p>
          </div>
          <div class="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 duration-500 transition-transform hover:scale-105">
            <h4 class="mb-2 text-lg md:text-xl lg:text-2xl text-slate-800 font-semibold">进程领航</h4>
            <p class="text-gray-500 text-base/relaxed">
              记录进度目标计数和专注的网页应用程序。我的目标是让用户享受方便快捷高效美观的日程效率软件体验。
            </p>
          </div>
        </div>

        <h3 class="text-center text-xl font-bold md:text-2xl text-slate-800 mt-12 md:mt-20">我们的理念</h3>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 duration-500 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105">
            <h4 class="mb-2 text-lg md:text-xl lg:text-2xl text-slate-800 font-semibold text-center">开放</h4>
          </div>
          <div class="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 duration-500 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105">
            <h4 class="mb-2 text-lg md:text-xl lg:text-2xl text-slate-800 font-semibold text-center">自由</h4>
          </div>
          <div class="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 duration-500 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105">
            <h4 class="mb-2 text-lg md:text-xl lg:text-2xl text-slate-800 font-semibold text-center">平等</h4>
          </div>
          <div class="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 duration-500 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105">
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
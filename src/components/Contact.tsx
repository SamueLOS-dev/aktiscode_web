@@ .. @@
         {/* Demo Request Link */}
         <div className="text-center mt-8 lg:mt-12 mb-16 px-6">
-          <a
-            href="/demo"
+          <Link
+            to="/demo"
             className="inline-flex items-center gap-3 bg-[#38FFCD] text-[#001742] font-semibold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-gradient-to-r hover:from-[#38FFCD] hover:to-[#10E7FF] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_18px_rgba(56,255,205,0.45)]"
           >
             Požiadať o demo zdarma
             <ArrowRight className="w-5 h-5" />
-          </a>
+          </Link>
         </div>
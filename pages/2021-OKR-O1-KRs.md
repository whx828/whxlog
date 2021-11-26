- 每周熬夜不超过4次 #2021-OKR-01-KRs
  晚上12点以后睡觉即为熬夜
- 尽力避免久坐，经常起身活动活动 #2021-OKR-01-KRs
- 多喝水 #2021-OKR-01-KRs
- 有机会去洗牙 #2021-OKR-01-KRs
-
- #+BEGIN_QUERY
  {:title "KR内容"
   :query [:find (pull ?b [*])
           :in $ ?current-page
           :where
           [?p :page/name ?current-page]
           [?b :block/ref-pages ?p]
           [?b :block/page ?bp]
           [?bp :page/name ?bp-name]
           [(not= "okr" ?bp-name)]
           (not [?b :block/marker ?marker]
           [(contains? #{"TODO" "DOING" "DONE" "LATER" "NOW"} ?marker)])]
   :inputs [:current-page]}
  #+END_QUERY
- #+BEGIN_QUERY
  {:title [:code "花费时间 (分钟)"]
  :query [:find (sum ?spent-min)
               :in $ ?current-page
                            :where
                            [?p :page/name ?current-page]
                            [?b :block/ref-pages ?p]
                            [?b :block/marker ?m]
                            [(contains? #{"DOING" "DONE"} ?m)]
                            [?b :block/properties ?prop]
                            [(get ?prop "doing") ?doing]
                            [(get ?prop "done") ?done]
                            [(- ?done ?doing) ?spent]
                            [(/ ?spent 60000) ?spent-min]]
                :inputs [:current-page]
  }
  #+END_QUERY
- #+BEGIN_QUERY
  {:title "打卡（次数）"
   :query [:find (count ?b)
           :in $ ?current-page
           :where
           [?p :page/name ?current-page]
           [?b :block/marker ?marker]
           [?b :block/ref-pages ?p]
           [(= "DONE" ?marker)]]
   :inputs [:current-page]}
  #+END_QUERY
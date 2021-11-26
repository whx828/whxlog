- #.eisenhower-matrix Hello
  template:: Hello
	- [[ 在做计划事项]]
		- 今日重点
			-
		-
		- 昨日回顾
			-
	- [[待做计划事项]]
		- 长期战略
			-
		-
		- 阶段回顾
	- [[在做其他事项]]
		- 分解任务
			-
		-
		- 心态调整
	- [[待做其他事项]]
		- 拖
			-
		-
		- 延
		-
	- [[统计]]
		- query-table:: false
		  #+BEGIN_QUERY
		  {:query [:find (pull ?b [*])
		           :where
		           [?b :block/marker ?marker]
		           (not (not [?b :block/ref-pages ?p]
		           [?p :page/name ?page-name]
		           [(clojure.string/includes? ?page-name "okr")])
		           (not [?b :block/priority ?priority]
		           [(contains? #{"A" "B" "C"} ?priority)]))
		           [(contains? #{"DOING" "NOW"} ?marker)]]
		   }
		  #+END_QUERY
		-
		- query-table:: false
		  #+BEGIN_QUERY
		  {:query [:find (pull ?b [*])
		           :where
		           [?b :block/marker ?marker]
		           (not (not [?b :block/ref-pages ?p]
		           [?p :page/name ?page-name]
		           [(clojure.string/includes? ?page-name "okr")])
		           (not [?b :block/priority ?priority]
		           [(contains? #{"A" "B" "C"} ?priority)]))
		           [(contains? #{"TODO" "LATER"} ?marker)]]
		   }
		  #+END_QUERY
		-
		- query-table:: false
		  #+BEGIN_QUERY
		  {:query [:find (pull ?b [*])
		           :where
		           [?b :block/marker ?marker]
		           (not [?b :block/ref-pages ?p]
		           [?p :page/name ?page-name]
		           [(clojure.string/includes? ?page-name "okr")])
		           (not [?b :block/priority ?priority]
		           [(contains? #{"A" "B" "C"} ?priority)])
		           [(contains? #{"DOING" "NOW"} ?marker)]]
		   }
		  #+END_QUERY
		-
		- query-table:: false
		  #+BEGIN_QUERY
		  {:query [:find (pull ?b [*])
		           :where
		           [?b :block/marker ?marker]
		           (not [?b :block/ref-pages ?p]
		           [?p :page/name ?page-name]
		           [(clojure.string/includes? ?page-name "okr")])
		           (not [?b :block/priority ?priority]
		           [(contains? #{"A" "B" "C"} ?priority)])
		           [(contains? #{"LATER"} ?marker)]]
		   }
		  #+END_QUERY
		-
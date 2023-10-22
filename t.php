<?php
   function check_answer($user_answ, $corr_answ)  {

		sort($user_answ);
		sort($corr_answ);
		if ($user_answ != $corr_answ) {
			return 0;
		}
		return 1;

	}


	check_answer([1, 2, 3], [3, 2, 1])
?>
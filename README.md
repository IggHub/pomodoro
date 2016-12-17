## Iggy's BASIC Pomodoro Timer

Pomodoro (tomato) timer is a simple, easy-to-use timer based on [pomodoro technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) to break down work into intervals (25 mins), followed by short breaks (5 mins).

## Interface

![pomodoro_overall](http://i.imgur.com/cTaV6qDm.png)

The concept is simple, create a timer that does one thing, and does it good: counting down time without any distraction.

To enter a new task, click on the line above task and input the desired task.

![insert_task_input](http://i.imgur.com/NtOE1EVm.png)

Press play button to start the timer. The clock icon on the right is the reset timer button, whereupon pressing, it restarts the current timer (if you are in `pomodoro mode` and has `5:02` remaining time, pressing reset will start the timer back up to `25:00`)

![timer_play](http://i.imgur.com/yPLsK1N.png)

![pomodoro_time](http://i.imgur.com/j4B2Z7Im.png)

Once 25 minutes passed, it automatically switched to `break mode`, where it counts down 5 minutes. Once 5 minute is up, it loops back to `pomodoro mode`. It is imperative that user does nothing work-related during the 5 minute `break mode`.

![Imgur](http://i.imgur.com/42gR3qvm.png)

The loop `pomodoro mode` -> `break mode` repeats 4 times. Once the 4th cycle is completed, the timer goes to `long break mode`, where the timer counts down 30 minute instead of 5.

![Imgur](http://i.imgur.com/jmwcT6Gm.png)

Once 30 minutes is up, the loop start over again.

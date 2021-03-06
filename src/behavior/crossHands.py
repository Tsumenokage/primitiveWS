#!/usr/bin/env python
# -*- coding: utf-8 -*-

import numpy
import time

import pypot.primitive

class CrossHandsBehave(pypot.primitive.Primitive):
    def run(self):
        poppy = self.robot
        
        poppy.r_shoulder_x.goto_position(-10, 4, wait=False)
        poppy.r_shoulder_y.goto_position(-20, 4, wait=False)
        
        poppy.l_shoulder_x.goto_position(10, 3, wait=False)
        poppy.l_shoulder_y.goto_position(-20, 3, wait=False)
        
        poppy.r_arm_z.goto_position(90, 4, wait=False)
        poppy.r_elbow_y.goto_position(-60, 4, wait=False)

        poppy.l_arm_z.goto_position(-90, 3, wait=False)
        poppy.l_elbow_y.goto_position(-60, 3, wait=True)
        
        time.sleep(1)



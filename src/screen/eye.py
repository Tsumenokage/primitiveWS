#!/usr/bin/env python
# -*- coding: utf-8 -*-

import webbrowser
import pypot.primitive

class eyeBehave(pypot.primitive.Primitive):

	properties = pypot.primitive.Primitive.properties + ['color','mood']

	def __init__(self, robot):
		pypot.primitive.Primitive.__init__(self, robot, color = 'blue', mood = 'neutral')
		self._robot = robot
		self._color = color
		self._mood = mood

	def run(self):
		poppy = self.robot
		webbrowser.open("127.0.0.1/eye.pih/neutral/blue")


	@property
	def color(self):
	    return self._color
	
	@color.setter
	def color(self,color)
		print color
		self._color = color

	@property
	def mood(self)
		return self._mood

	@mood.setter
	def mood(self,mood)
		print mood
		self._mood = mood
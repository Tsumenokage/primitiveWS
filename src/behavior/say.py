#!/usr/bin/env python
# -*- coding: utf-8 -*-

#librairies annexes
import sys
import argparse
import re
import urllib, urllib2
import time
import pygame
import mp3play
from collections import namedtuple

#librairies liées au robot poppy
import pypot.primitive
import pypot.robot

#définition de la classe pour dire un texte passé en paramètre
class Say(pypot.primitive.Primitive):

	def __init__(self, robot):
		pypot.primitive.Primitive.__init__(self, robot)

		self._robot = robot

		#texte par défaut
		self._text = 'Bonjour je m\'appelle poppy'

		print('init ok')


	def start(self, text):

		self._text = text

	def run(self):
		filename = '../utils/speech.mp3'

		#création du fichier audio
		print('récupération fichier audio')
		audio_extract(input_text=self._text, outname=filename)

		#lecture du fichier mp3
		print('lecture fichier audio')
		clip = mp3play.load(filename)
		clip.play()
		time.sleep((clip.seconds() + 1) * 2)
		clip.stop()

	def audio_extract(input_text, outname):
 
    #process input_text into chunks
    #Google TTS only accepts up to (and including) 100 characters long texts.
    #Split the text in segments of maximum 100 characters long.
	    combined_text = split_text(input_text)

	    #download chunks and write them to the output file
	    for idx, val in enumerate(combined_text):
	        mp3url = "http://api.voicerss.org/?key=f4714f79ae944b5d9276593d2144dc0a&hl=fr-fr&src=%s" %(urllib.quote(val))
	        headers = {"Host": " api.voicerss.org",
	                   "Referer": "http://www.gstatic.com/translate/sound_player2.swf",
	                   "User-Agent": "Mozilla/5.0 (Windows NT 6.3; WOW64)"
	                                 "AppleWebKit/537.36 (KHTML, like Gecko) "
	                                 "Chrome/46.0.2490.86 Safari/537.36"
	        }
	        req = urllib2.Request(mp3url, '', headers)
	        sys.stdout.write('.')
	        sys.stdout.flush()
	        if len(val) > 0:
	            try:
	                response = urllib2.urlopen(req)
	                args.output.write(response.read())
	                time.sleep(.5)
	            except urllib2.URLError as e:
	                print ('%s' % e)
	    print('Saved MP3 to %s' % outname)


	def split_text(input_text, max_length=100):

		def split_text_rec(input_text, regexps, max_length=max_length):

			if(len(input_text) <= max_length): return [input_text]

	        #mistakenly passed a string instead of a list
	        if isinstance(regexps, basestring): regexps = [regexps]
	        regexp = regexps.pop(0) if regexps else '(.{%d})' % max_length

	        text_list = re.split(regexp, input_text)
	        combined_text = []
	        #first segment could be >max_length
	        combined_text.extend(split_text_rec(text_list.pop(0), regexps, max_length))
	        for val in text_list:
	            current = combined_text.pop()
	            concat = current + val
	            if(len(concat) <= max_length):
	                combined_text.append(concat)
	            else:
	                combined_text.append(current)
	                #val could be >max_length
	                combined_text.extend(split_text_rec(val, regexps, max_length))
			
			return combined_text

		return split_text_rec(input_text.replace('\n', ''),['([\,|\.|;]+)', '( )'])

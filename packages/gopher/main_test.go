package main

import (
	"testing"
)

func TestAlwaysPasses(t *testing.T) {
	// This test always passes because it doesn't do anything that could fail.
}

func TestAlwaysFails(t *testing.T) {
	t.Fail()
}

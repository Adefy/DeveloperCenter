#!/usr/bin/env ruby
# scaffold.rb
#
require 'json'
require 'erb'
require 'fileutils'
require 'active_support/core_ext/hash/deep_merge'

def JSON.load_file(filename)
  JSON.load(File.read(filename))
end

class String

  def basename
    File.basename(self)
  end

  def basename_wo_extname
    File.basename(self, File.extname(self))
  end

  def ext(swap)
    File.join(File.dirname(self), basename_wo_extname + swap)
  end

end

templater = ERB.new(File.read("scaffold.jade.erb"))

top_dirname = Dir.getwd

def data_hash_new(name)
  {
    name => {
      "title" => "",
      "subtitle" => "",
      "route" => "",
      "args" => [],
      "attrs" => [],
    }
  }
end

def attr_hash_new
  { "name" => "", "example" => "", "desc" => "" }
end

def hash_to_hash_attrs(hash)
  hash.map do |key, value|
    attr_hash_new.merge("name" => key, "example" => value.to_s.dump)
  end
end

Dir.chdir("_json") do
  Dir.glob("**/*.json").map do |filename|
    dirname = File.dirname(filename)
    target_dirname = File.join(top_dirname, dirname)

    basename = filename.basename
    dataname = basename.basename_wo_extname

    target_jade_filename = File.join(target_dirname, basename.ext(".jade"))
    target_data_filename = File.join(target_dirname, "_data.json")

    new_data_hash = { dataname => { "attrs" => hash_to_hash_attrs(JSON.load_file(filename)) } } # add the new data here

    original_data_hash = File.exists?(target_data_filename) ?
                          JSON.load_file(target_data_filename) : {}
    data_hash = data_hash_new(dataname)
                  .deep_merge(original_data_hash)
                  .deep_merge(new_data_hash)
    ### template_variables
    import_filename = File.join("..", "_json", filename)
    ###
    FileUtils.mkdir_p(target_dirname)
    File.write(target_jade_filename, templater.result(send(:binding)))
    File.write(target_data_filename, data_hash.to_json)
  end
end
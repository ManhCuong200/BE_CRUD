import Student from "../models/studentModel.js";

export const createStudent = async (studentData) => {
  const newStudent = await Student.create(studentData);
  return newStudent;
};

export const getAllStudents = async () => {
  return await Student.find();
};

export const getStudentById = async (studentId) => {
  return await Student.findById(studentId);
};

export const updateStudent = async (studentId, updateData) => {
  return await Student.findByIdAndUpdate(studentId, updateData, { new: true });
};

export const deleteStudent = async (studentId) => {
  return await Student.findByIdAndDelete(studentId);
};

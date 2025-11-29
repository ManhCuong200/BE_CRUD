import * as studentService from "../services/studentService.js";

export const create = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);

    res.status(201).json({
      message: "Tạo student thành công",
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDetail = async (req, res) => {
  try {
    const student = await studentService.getStudentById(req.params.id);

    if (!student)
      return res.status(404).json({ message: "Không tìm thấy student" });

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const student = await studentService.updateStudent(req.params.id, req.body);

    res.status(200).json({
      message: "Update student thành công",
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await studentService.deleteStudent(req.params.id);

    res.status(200).json({
      message: "Xóa student thành công",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
